import { useEffect } from 'react'
import React, { useState } from 'react';
import axios from 'axios'
import Statistics from './components/Statistics'
import BarChartCom from './components/Barchart';
import MyTableComponent from './components/TransactionTable'
import './App.css';


const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function App() {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [data,setData] = useState([])
  const [barData,setBarData] = useState([])
  const [tableData,setTableData] = useState([])
  const [searchText,setST] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsResponse, barChartResponse, tableResponse] = await Promise.all([
          axios.get(`https://roxiler-server.vercel.app/statistics?month=${selectedMonth}`),
          axios.get(`https://roxiler-server.vercel.app/bar-chart?month=${selectedMonth}`),
          axios.get(`https://roxiler-server.vercel.app/tabledata?month=${selectedMonth}`)
        ]);
  
        setData(statsResponse.data);
        setBarData(barChartResponse.data);
  
        const filteredTableData = tableResponse.data.filter(
          each =>
            each.title.toLowerCase().includes(searchText.toLowerCase()) ||
            each.description.toLowerCase().includes(searchText.toLowerCase()) ||
            each.category.toLowerCase().includes(searchText.toLowerCase())
        );
  
        setTableData(filteredTableData);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  
    fetchData();
  }, [selectedMonth, searchText]);
  



  // Event handler for changing the selected month
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  


  return (
    <div className="App">
     <div className='title'>
      <h1>Transaction Dashboard</h1>
     </div>
     <div className='select-month-con'>
      <input onChange={(event)=>setST(event.target.value)} value={searchText} className='search-bar' type='search' placeholder='Search Transaction' />
     <div>
     <label htmlFor="monthDropdown" className='select-month-head'>Select Month: </label>
      <select
        id="monthDropdown"
        value={selectedMonth}
        onChange={handleMonthChange} 
        className='dropdown-arrow'
      >
        <option value="" disabled>Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
     </div>
     </div>
     <MyTableComponent searchText={searchText} monthData={tableData} month={selectedMonth}/>
     <Statistics monthData={data} month={selectedMonth} />
     <BarChartCom monthData={barData} month={selectedMonth} />
     
    </div>
  );
}

export default App;
