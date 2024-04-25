import React from 'react';
import './Reports.css'; 
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

const Reports = ({data}) => {
    let {diabetesData}=data;
    console.log(diabetesData);

  const downloadPDF = () => {
    const doc = new jsPDF();
    let textString = "";

for (let key in data) {
  if (Array.isArray(data[key])) {
    textString += `${key}:\n`;
    data[key].forEach(item => {
      for (let prop in item) {
        textString += `  ${prop}: ${item[prop]}\n`;
      }
    });
  } else {
    textString += `${key}: ${data[key]}\n`;
  }
}

    console.log(textString);
    doc.text(textString, 10, 10);
    doc.save("diabetes_report.pdf");
  }


  const downloadExcel = () => {
    const data = diabetesData.map(({  date,
      bloodSugar,
      bloodPressure,
      Insulin,
      Medication,
      weight
})=>[  date,
  bloodSugar,
  bloodPressure,
  Insulin,
  Medication,
  weight
])

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Diabetes Data");
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelBlob, 'diabetes_report.xlsx');
  }

  const sharePDF = () => {
    window.open('mailto:?subject=Diabetes%20Report&body=Please%20find%20attached%20the%20Diabetes%20Report%20file.', '_blank');
  }

  const shareExcel = () => {
    window.open('mailto:?subject=Diabetes%20Excel%20Data&body=Please%20find%20attached%20the%20Diabetes%20Excel%20Data%20file.', '_blank');
  }

  return (
    <div className="reports-page">
      <h2>Reports and Analysis</h2>
      <div className="report-section">
        <h3>Create a Report on Diabetes (PDF/Excel):</h3>
        {/* <ul>
          <li>Patient Personal Data</li>
          <li>Diabetes Records Data</li>
          <li>Charts and Graphs for Blood Sugar Levels, Blood Pressure, and Weight</li>
        </ul> */}
        <div className="report-action">
          <button onClick={downloadPDF}>Download PDF</button>
          <button onClick={downloadExcel}>Download Excel</button>
        </div>
      </div>
      <div className="report-section">
        <h3>Share Diabetes Report (PDF/Excel):</h3>
        <p>Share the report with the doctor, family members, or friends</p>
        <div className="report-action">
          <button onClick={sharePDF}>Share PDF</button>
          <button onClick={shareExcel}>Share Excel</button>
        </div>
      </div>
    </div>
  );
}

export default Reports;
