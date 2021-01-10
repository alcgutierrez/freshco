import React, { Component } from 'react';
//import Sun from "./sun.svg";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavItems">
                <h1 className="nav-name">freshco</h1>
            </nav>
        );
    }
}

export default Navbar;