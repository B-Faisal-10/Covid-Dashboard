# 🦠 COVID-19 and Population Dashboard

A responsive, interactive COVID-19 dashboard built with **React.js** that displays real-time pandemic statistics. The dashboard includes statistical summary cards, a line chart for historical trends, a pie chart for distribution, and country-wise selection with a mock date range UI for visual consistency.

---

## 📌 Features

- 🌐 **Searchable Country Dropdown** (powered by REST Countries API)
- 📅 **Date Range Picker UI** (mocked to match assignment mockup)
- 📊 **Stat Cards**: Total Cases, Recoveries, and Deaths
- 📈 **Line Chart**: COVID-19 trends over time
- 🥧 **Pie Chart (Doughnut)**: Distribution of total cases, deaths, and recoveries
- 📱 **Responsive Design** for all screen sizes
- ⚙️ **Error Handling** for API responses
- ♻️ **Reusable Components** and clean modular code

---

## 🧰 Tech Stack

- **Frontend**: React.js, JSX, Bootstrap 5
- **APIs**:
  - [disease.sh](https://disease.sh/) – COVID-19 live stats & historical data
  - [restcountries.com](https://restcountries.com/) – Country names and ISO codes
- **Charts**: Chart.js via react-chartjs-2
- **Additional Libraries**:
  - `axios` – HTTP requests
  - `react-select` – Searchable dropdown
  - `react-datepicker` – Date picker UI

---

## 📁 Folder Structure

covid-dashboard/
├── public/
├── src/ 
│ ├── components/
│ │ ├── CountrySelector.js │
│   ├── DateRangePicker.js │
│   ├── StatsCards.js │
│   ├── LineChart.js │
│   └── DoughnutChart.js │
├── App.js │
├── index.js │
└── App.css
├── .gitignore
├── package.json
├── README.md


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/covid-dashboard.git
cd covid-dashboard

## Install Dependencies
npm install

## Run the App
npm start
The app will launch at: http://localhost:3000

🌐 API References
COVID-19 Country Stats (Live)
https://disease.sh/v3/covid-19/countries/{country}

COVID-19 Historical Data
https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500

Country List for Dropdown
https://restcountries.com/v3.1/all