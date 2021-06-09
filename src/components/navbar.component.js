import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Vaccination Center</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/details" className="nav-link">Details</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Details Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/dashboard" className="nav-link">Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
