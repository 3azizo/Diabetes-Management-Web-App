import React from 'react';

import { FaHome } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiTableBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";




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
    <div class="nav" id="nav">
    <nav class="nav__content">
        <div class="nav__toggle" id="nav-toggle" onClick={showMenu}>
            <i class='bx bx-chevron-right' ></i>
        </div>

        <a href="#" class="nav__logo">
            <i class='bx bxs-heart' ></i>
            <span class="nav__logo-name">Healthy</span>
        </a>

        <div class="nav__list">
            <a href="#" class="nav__link active-link">
                <FaHome/>
                <span class="nav__name">Home</span>
            </a>

            <a href="#" class="nav__link">
            <IoFileTrayFullOutline />
                <span class="nav__name">Record forms</span>
            </a>

            <a href="#" class="nav__link">
            <PiTableBold />
                <span class="nav__name">Tables</span>
            </a>

            <a href="#" class="nav__link">
                <TbBrandGoogleAnalytics />
                <span class="nav__name">Reports And Analytics</span>
                </a>

            <a href="#" class="nav__link">
            < IoSettingsOutline/>

                <span class="nav__name">Settings</span>
            </a>
        </div>
    </nav>
</div>
  )
}

export default Sidebar