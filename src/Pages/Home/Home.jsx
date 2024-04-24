import React, { useState } from 'react';
import "./Home.css"
import Main from './Main';

import { FaHome } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { PiTableBold } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";




import DiabeticPatientRecord from "../DiabeticPatientRecord/DiabeticPatientRecord"
import Reports from '../ReportsAndAnalytics/Reports';
import Table from '../Table/Table';
import Setting from "../Setting/Setting"

const Home = ({ patientData, tipsData }) => {
  let [activePage,setActivePage]=useState("Home");
  let [newRecord,setNewRecord]=useState({})
  let NavList=[
    {icons:<FaHome/>,name:"Home",},
    {icons:<IoFileTrayFullOutline/>,name:"record forms",},
    {icons:<PiTableBold/>,name:"Tables",component:<Table/>},
    {icons:<TbBrandGoogleAnalytics/>,name:"Reports And Analytics",},
    {icons:<IoSettingsOutline/>,name:"Setting",component:<Setting/>},
  ]
  let getRecord=(recordObj)=>{
    setActivePage("Tables");
    setNewRecord(recordObj);
    console.log(patientData.diabetesData=[...patientData.diabetesData,recordObj]);
    
  }
  const Sidebar = () => {
    const showMenu = () =>{
        const toggle = document.getElementById("nav-toggle"),
        navbar = document.getElementById("nav")
    
        if(toggle && navbar){
            toggle.addEventListener('click', ()=>{
                /* Show menu */
                navbar.classList.toggle('show-menu')
                /* Rotate toggle icon */
                toggle.classList.toggle('rotate-icon')
            })
        }
    }
  return (
    <div className="nav" id="nav">
    <nav className="nav__content">
        <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
        <FaChevronRight />
        </div>

        <a href="#" className="nav__logo">
        <FaHeartbeat />
            <span className="nav__logo-name">Healthy</span>
        </a>

        <div className="nav__list">
          {NavList.map(({icons,name})=><a href='#' className="nav__link" key={name} onClick={()=>setActivePage(name)}>
            {icons}
            <span className="nav__name">{name}</span>
          </a>)}
  
        </div>
    </nav>
</div>
  )
}


  return (
    <div className="">
      <Sidebar/>
      {activePage=="Home"&&<Main patientData={patientData} tipsData={tipsData}/>}
      {activePage=="record forms"&&<DiabeticPatientRecord getRecordObj={getRecord}/>}
      {activePage=="Tables"&&<Table data={patientData.diabetesData}/>}
      {activePage=="Reports And Analytics"&&<Reports data={patientData}/>}
      {activePage=="Setting"&&<Setting/>}

    </div>
  );
};

export default Home;
