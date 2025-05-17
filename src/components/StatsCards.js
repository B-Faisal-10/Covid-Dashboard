import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StatsCards({ countryCode }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/countries/${countryCode}`
        );

        const stats = res.data;

        setData({
          cases: stats.cases,
          recovered: stats.recovered,
          deaths: stats.deaths,
        });
      } catch (err) {
        console.error(err);
        setError('Data not available for this country.');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [countryCode]);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  const formatNumber = (num) =>
    num >= 1_000_000
      ? `${(num / 1_000_000).toFixed(1)}M`
      : num >= 1_000
      ? `${(num / 1_000).toFixed(1)}K`
      : num;

  return (
    <div className="row text-center mb-4">
      <div className="col-md-4 mb-3">
        <div className="p-4 rounded shadow bg-primary text-white">
          <h6 className="fw-bold">Total Cases</h6>
          <div className="display-6">{formatNumber(data.cases)}</div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="p-4 rounded shadow bg-success text-white">
          <h6 className="fw-bold">Recoveries</h6>
          <div className="display-6">{formatNumber(data.recovered)}</div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="p-4 rounded shadow bg-danger text-white">
          <h6 className="fw-bold">Deaths</h6>
          <div className="display-6">{formatNumber(data.deaths)}</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
