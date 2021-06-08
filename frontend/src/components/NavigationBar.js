import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from './images/bgi.jpg';

const Styles = styled.div`
  .navbar { background-color: #222;
  height: 130px; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #6CE;
    font-size: 1.2em;
    &:hover { color: white; }
    text-decoration: none;
  }
  .navbar-brand {
    font-size: 2.5em;
    color: white;
    font-align: center;
  }
  .navl{
    top: 5%;
    left : 30%;
    right: 25%;
    position: absolute;
  }
  .nav-link{
    marginLeft: 0.8rem;
  }
`;
export const NavigationBar = () => (
  <Styles>
  <div className ='bg'
    style ={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "#f5f5f5",
    position: 'relative'
    }}>
    <Navbar expand="lg">
      <Navbar.Brand className="navl">Welcome to Quick Rescue</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Login">Doctor Login</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Login" >User Login</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   </div> 
  </Styles>
)