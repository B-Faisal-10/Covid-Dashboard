import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

function LineChart({ countryCode }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=1500`
        );

        const timeline = res.data.timeline;
        const labels = Object.keys(timeline.cases);
        const dataCases = Object.values(timeline.cases);
        const dataDeaths = Object.values(timeline.deaths);
        const dataRecovered = Object.values(timeline.recovered);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Cases',
              data: dataCases,
              borderColor: '#007bff',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Deaths',
              data: dataDeaths,
              borderColor: '#dc3545',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Recovered',
              data: dataRecovered,
              borderColor: '#28a745',
              fill: false,
              tension: 0.3
            }
          ]
        });
      } catch (err) {
        console.error('Error fetching line chart data:', err);
      }
    };

    fetchChartData();
  }, [countryCode]);

  if (!chartData) return <p>Loading line chart...</p>;

  return (
    <div className="card shadow p-4 mb-4 h-100">
      <h6 className="text-center fw-semibold mb-3">Line Chart</h6>
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
