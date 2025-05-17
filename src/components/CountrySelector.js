import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function CountrySelector({ onSelectCountry }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        const sorted = res.data
          .map((country) => ({
            label: country.name.common,
            value: (country.cca2 || country.cca3 || '').toLowerCase(),
          }))
          .filter((c) => c.value)
          .sort((a, b) => a.label.localeCompare(b.label));

        setOptions(sorted);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch countries:', err);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (selected) => {
    onSelectCountry(selected.value);
  };

  if (loading) return <p>Loading countries...</p>;

  return (
    <div>
      <label className="form-label fw-semibold">Search Country</label>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select Country"
        defaultValue={{ label: 'Search Country', value: 'sc' }}
      />
    </div>
  );
}

export default CountrySelector;
