import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data, dataName, dataValue, onClick }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataName} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataValue} fill="darkgray" onClick={onClick} />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Chart;
