import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date('2022-11-20'));
  const [endDate, setEndDate] = useState(new Date('2023-12-23'));

  return (
    <div>
      <label className="form-label fw-semibold">Select Date Range</label>
      <div className="d-flex gap-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="form-control"
          dateFormat="dd-MM-yyyy"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="form-control"
          dateFormat="dd-MM-yyyy"
        />
      </div>
    </div>
  );
}

export default DateRangePicker;
