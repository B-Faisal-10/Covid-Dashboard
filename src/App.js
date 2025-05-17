import React, { useState } from 'react';
import CountrySelector from './components/CountrySelector';
import DateRangePicker from './components/DateRangePicker';
import StatsCards from './components/StatsCards';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const handleCountryChange = (code) => {
    setSelectedCountry(code);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">COVID-19 and Population Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <CountrySelector onSelectCountry={handleCountryChange} />
        </div>
        <div className="col-md-6 mb-3">
          <DateRangePicker />
        </div>
      </div>

      <StatsCards countryCode={selectedCountry} />

      <div className="row">
        <div className="col-md-6">
          <LineChart countryCode={selectedCountry} />
        </div>
        <div className="col-md-6">
          <DoughnutChart countryCode={selectedCountry} />
        </div>
      </div>
    </div>
  );
}

export default App;
