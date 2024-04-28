import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import PieChart from './PieChart';
import LineChart from "./LineChart";
import SliderComponent from './SliderComponent';
Chart.register(CategoryScale);
const Main = ({patientData,tipsData}) => {

  const [BloodPressureChart, setBloodPeressurChart] = useState({
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
    datasets: [{
      label: 'Systolic',
      data: [120, 125, 130, 128, 135, 130],
      borderColor: '#4CAF50',
      fill: false
    }, {
      label: 'Diastolic',
      data: [80, 82, 85, 84, 88, 85],
      borderColor: '#F44336',
      fill: false
    }]
  });
  const [weightChartData,setweightChartData]=useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Weight (kg)',
      data: [60, 64, 68, 72, 76, 80], // Example weight data, replace with your actual data
      borderColor: '#171717',
      fill: false
    }]
  })
  return (
   <div >
        <div className='container main-app'>
        <div className="patient-data card">
        <h2>Patient Details</h2>
        <p><strong>Name:</strong> {patientData.name}</p>
        <p><strong>Age:</strong> {patientData.age}</p>
        <p><strong>Blood Sugar Level:</strong> {patientData.bloodSugarLevel}</p>
        <p><strong>Blood Pressure:</strong> {patientData.bloodPressure}</p>
        <p><strong>Weigth:</strong> {patientData.weight}</p>
        <p><strong>Last Blood Sugar Level:</strong> {patientData.lastBloodSugarReading}</p>
        <p><strong>Last Blood Pressure:</strong> {patientData.lastBloodPressureReading}</p>
      </div>
      <div className='card'>
        <LineChart chartData={BloodPressureChart} title={"blood Pressure"} desc={"systolic/Diastolic"}/>
      </div>
      <div className='card'>
        <LineChart chartData={weightChartData} title={"Weigth"} desc={"kg"}/>
      </div>
      <div className="diabetes-tips card">
        <h2>Tips for diabetics</h2>
        <ul>
          {tipsData.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
        </div>
   </div> 
      <div className="advertisements-container">
        <SliderComponent/>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Main