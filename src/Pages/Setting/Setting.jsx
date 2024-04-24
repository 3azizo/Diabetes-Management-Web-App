import React, { useState } from 'react';
import "./Setting.css"
const Settings = () => {
  const [bloodSugarUnit, setBloodSugarUnit] = useState('mg/dL');

  const handleUnitChange = () => {
    setBloodSugarUnit(unit => unit === 'mg/dL' ? 'mmol/L' : 'mg/dL');
  };

  const handleShareApp = () => {
    // Logic to share the app
    alert('Share the app with friends and family!');
  };

  const handleDeleteAccount = () => {
    // Logic to delete user account
    alert('User account deleted!');
  };

  const handleLogout = () => {
    // Logic to logout user
    alert('User logged out!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Change Blood Sugar Units:</h3>
        <button className="settings-button" onClick={handleUnitChange}>Change Units ({bloodSugarUnit})</button>
      </div>
      <div className='setting-part'>

      </div>
      <div className="settings-section">
        <h3>App Information:</h3>
        <p>Name: Diabetic </p>
        <p>Version: 1.0</p>
        <p>Developer: 3azizo</p>
        <p>Developer Website: <a href="www.example.com">www.example.com</a></p>
      </div>
      <div className="settings-section">
        <h3>Share the App:</h3>
        <button className="settings-button" onClick={handleShareApp}>Share the App</button>
      </div>
      <div className="settings-section">
        <h3>Delete Account:</h3>
        <button className="settings-button" onClick={handleDeleteAccount}>Delete Account</button>
      </div>
      <div className="settings-section">
        <h3>Logout:</h3>
        <button className="settings-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;
