import React, { useState } from 'react';
import "./Setting.css"
const ProfileSettings = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    phone: ''
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="profile settings-container">
      <h2>Profile Settings</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <button onClick={handleFormSubmit}>Save Profile</button>
      </div>
    </div>
  );
};
const Settings = () => {
  // const [bloodSugarUnit, setBloodSugarUnit] = useState('mg/dL');

  // const handleUnitChange = () => {
  //   setBloodSugarUnit(unit => unit === 'mg/dL' ? 'mmol/L' : 'mg/dL');
  // };

  // const handleShareApp = () => {
  //   // Logic to share the app
  //   alert('Share the app with friends and family!');
  // };

  // const handleDeleteAccount = () => {
  //   // Logic to delete user account
  //   alert('User account deleted!');
  // };

  // const handleLogout = () => {
  //   // Logic to logout user
  //   alert('User logged out!');
  // };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {/* <div className="settings-section">
        <h3>Change Blood Sugar Units:</h3>
        <button className="settings-button" onClick={handleUnitChange}>Change Units ({bloodSugarUnit})</button>
      </div> */}
      {/* <div className='setting-part'>

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
      </div> */}
      <ProfileSettings/>
    </div>
  );
};

export default Settings;
