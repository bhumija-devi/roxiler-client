import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

import './index.css'; // Import your CSS file for styling

const BarChartCom = (props) => {
  const{month,monthData} = props
  return (
    <ResponsiveContainer  width="80%" height={500} >
      <h1 className='stats-head'>Bar-Chart: {month}<span className='month-dis'>(Select month name from dropdown)</span></h1>
      <BarChart
        data={monthData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="priceRange"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="itemCount" fill="#AED0E8" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCom;
