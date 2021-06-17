import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

export const About = () => (
  <GridWrapper>
    <div className="text" 
      style={{
        position:"absolute",
        top:"20%",
        backgroundColor:"#dee",
        padding:"10px",
        borderRadius:"5",
        height:"70vh",
        width:"100vh",
        marginLeft:"20%"

      }}>
      <h1>Quick Rescue</h1>
      <p>Our application, Quick Rescue, will assist a patient with tracking down a specific specialist according to their necessities, accessibility, distance, and consultancy charges.</p>
      <p>It is planned particularly for a crisis and decrease the patient's time in chasing for a specific specialist</p>
      <p>This model raises the inclusion of little emergency clinics into the online framework to upgrade clinical benefits. </p>
    </div>
  </GridWrapper>
  
)

 