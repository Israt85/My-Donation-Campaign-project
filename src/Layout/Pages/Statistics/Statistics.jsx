import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';

const COLORS = ['#D80032', '#367E18'];

const Statistics = () => {
  const [allPieData, setAllPieData] = useState([]);
  const pieData = useLoaderData();

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('test')) || [];
    setAllPieData(newData);
  }, []);

  const data = [
    { name: 'Your Donation', value: allPieData.length },
    { name: 'Total Donation', value: pieData.length },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
        <h2 className="text-center font-bold">PIE CHART</h2>

      <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h2 className="flex items-center font-bold text-sm">Your Donation  <p className="w-8 ml-2 my-auto h-4 block bg-[#D80032]"></p></h2>
        <h2 className="flex items-center font-bold text-sm">Total Donation  <p className="w-8 ml-2 my-auto h-4 block bg-[#367E18]"></p></h2>
      </div>
    </div>
  );
};

export default Statistics;