import React from 'react'; // Import CSS file for styling

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="diabetes-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Glucose Level (mg/dL)</th>
            <th>blood Pressure</th>
            <th>Insulin (units)</th>
            <th>Medication</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.bloodSugar} mg/dl</td>
              <td>{item.bloodPressure.systolic}/{item.bloodPressure.diastolic} mmHg</td>
              <td>{item.Insulin} units</td>
              <td>{item.Medication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
