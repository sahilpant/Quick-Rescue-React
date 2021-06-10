import React from "react";
import { useState } from 'react';
import './Pdashboard.css';
import Appointment from './Appointment';

class Dashboard extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar-primary">
          <a href="#" className="btn-expand-collapse"><span className="glyphicon glyphicon-menu-left" /></a>
          <ul className="navbar-primary-menu">
            <li>
              <a href="\List"><span className="glyphicon glyphicon-list-alt" /><span className="nav-label">Available Doctors</span></a>
              <a href="#"><span className="glyphicon glyphicon-envelope" /><span className="nav-label">Available Beds</span></a>
              <a href="\numbers"><span className="glyphicon glyphicon-cog" /><span className="nav-label">Helpline Numbers</span></a>
              <a href="#"><span className='glyphicon glyphicon-cog' /><span className='nav-label'>Show Appointments</span> </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Dashboard;
