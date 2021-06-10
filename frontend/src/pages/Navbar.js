import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './NavbarElements';
import axios from 'axios';


class Navbar extends React.Component{
	render(){
   return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<NavLink to='/about' activeStyle>
				About
			</NavLink>
			<NavLink to='/DLogin' activeStyle>
				Doctor Login
			</NavLink>
			<NavLink to='/PLogin' activeStyle>
				User Login
			</NavLink>
			{/* Second Nav */}
			{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<h1 style={{
			fontSize:'40px',
			 color:'white',
			 alignItems : 'center',
			 display:"flex",
			 paddingLeft:'400px'
			 }}>Quick Rescue</h1>
	   </Nav>
	</>
);
}
}

export default Navbar;
