import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';

export default class Navbar extends Component {

    render() {
        return (
            <nav  className="navbar navbar-expand-lg fluid" style={{backgroundColor: "#00008B"}}>

                <Link to="/" className="navbar-brand" style={{paddingLeft: "20px",paddingRight:"20px",color:"white"}}>Vaccination Center</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white"}}>Details</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white",fontfamily:"Droid Sans"}}>Submit Your Details</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white"}}>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}