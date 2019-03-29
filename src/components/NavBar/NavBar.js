import React from 'react';
import '../../styles/css/main.css/main.css';
import { Link } from "react-router-dom";


const NavBar = () => (

    <ul className="navbarContainer">

			<li className="navbarItem">
				<Link to='/'>Schedule</Link>
			</li>
			<li className="navbarItem">
				<Link to='/my-meds'>My Meds</Link>
			</li>
			<li className="navbarItem">
				<Link to='/stock'>Stock</Link>
			</li>
    </ul>
 
);
export default NavBar;