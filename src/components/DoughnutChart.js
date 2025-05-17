import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ countryCode }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/countries/${countryCode}`
        );

        const { cases, deaths, recovered } = res.data;

        setChartData({
          labels: ['Cases', 'Deaths', 'Recovered'],
          datasets: [
            {
              label: 'COVID-19 Data',
              data: [cases, deaths, recovered],
              backgroundColor: ['#007bff', '#dc3545', '#28a745'],
              borderWidth: 1,
              hoverOffset: 6
            }
          ]
        });
      } catch (err) {
        console.error('Error fetching pie chart data:', err);
        setError('Pie chart data not available.');
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [countryCode]);

  if (loading) return <p>Loading pie chart...</p>;
  if (error) return <p>{error}</p>;
  if (!chartData) return null;

  return (
    <div className="card shadow p-4 mb-4 h-100">
      <h6 className="text-center fw-semibold mb-3">Pie Chart</h6>
      <div className="d-flex justify-content-center">
        <div style={{ maxWidth: '300px' }}>
          <Doughnut data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
