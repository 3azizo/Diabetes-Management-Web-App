import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData,title ,desc}) {
  console.log(chartData,title,desc);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: desc
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;