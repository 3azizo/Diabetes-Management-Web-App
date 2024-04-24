import React from 'react'

const Main = ({patientData,tipsData}) => {
  return (
   <div>
          {/* Basic Patient Data */}
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
      <div className="diabetes-tips card">
        <h2>Tips for diabetics</h2>
        <ul>
          {tipsData.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

         </div>
 
      {/* Advertisements */}
      {/* <div className="advertisements">
        <h2>الإعلانات</h2>
        <p>{adsData.diabetesInfo}</p>
        <p>{adsData.diabetesTips}</p>
        <p>{adsData.productOffers}</p>
      </div> */}

      {/* Diabetes Tips */}
   </div>
  )
}

export default Main