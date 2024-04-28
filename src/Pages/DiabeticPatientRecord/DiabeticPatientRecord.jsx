import React, { useState } from 'react';
import './DiabeticPatientRecord.css';

function DiabeticPatientRecord({getRecordObj}) {
  const [bloodSugar, setBloodSugar] = useState('');
  
  const [systolic,setSystolic]=useState("");
  const [diastolic,setDiastolic]=useState("");
  const [Insulin, setInsulin] = useState('');
  const [Medication, setMedication] = useState('');
  const [weight, setWeight] = useState('');

  let onSubmitHandler=(e)=>{
    e.preventDefault()
    let recordObj={
      date:new Date().toDateString(),
      bloodSugar,
      bloodPressure:{systolic,diastolic},
      Insulin,
      Medication, weight
    }
  getRecordObj(recordObj)
  }

  const handleBloodSugarChange = (e) => {
    setBloodSugar(e.target.value);
  };

  const handleInsulinChange = (e) => {
    setInsulin(e.target.value);
  };
  const handleMedicationChange = (e) => {
    setMedication(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  // Render UI
  return (
    <>
    <div className="diabetic-patient-record">
      <h2>Diabetic Patient Record</h2>
      <div className="form-group">
        <label>Blood Sugar Level:(mg/dL)</label>
        <input type="text" value={bloodSugar} onChange={handleBloodSugarChange} />
      </div>
      <div className="form-group">
        <label>Insulin:</label>
        <input type="text" value={Insulin} onChange={handleInsulinChange} />
      </div>
      <div className="form-group">
        <label>Medication:(units)</label>
        <input type="text" value={Medication} onChange={handleMedicationChange} />
      </div>
      <div className="form-group">
        <label>Blood Pressure:(mmHg)</label>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <input type="number" value={systolic} placeholder='systolic' onChange={(e)=>setSystolic(e.target.value)} />
        <input type="number" value={diastolic} placeholder='Diastolic' onChange={(e)=>setDiastolic(e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>Weight:</label>
        <input type="text" value={weight} onChange={handleWeightChange} />
      </div>
      <button className='record-btn' onClick={onSubmitHandler}>Record</button>
    </div>
    </>
  );
}

export default DiabeticPatientRecord;
