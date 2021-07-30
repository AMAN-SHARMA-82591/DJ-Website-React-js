import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';

function navbar() {
    return (
        <div class="navbar-section">
                <nav class="nav-link-main">
                    <div className="main-logo">
                        <NavLink className="logo-nav" to="/">DJ<span>.</span></NavLink>
                    </div>

                    <div class="main-sections">
                        <ul class="ul-section">
                            <li class="main-multiple-sec-container">
                                <NavLink className="nav-link" to="/home">
                                        Home
                                </NavLink>
                            </li>
                            <li class="main-multiple-sec-container">
                                <NavLink className="nav-link" to="/events">
                                        Events
                                </NavLink>
                            </li>
                            <li class="main-multiple-sec-container">
                                <NavLink className="nav-link" to="/about"> 
                                        About
                                </NavLink>
                            </li>
                            <li class="main-multiple-sec-container">
                                <NavLink className="nav-link" to="/contact"> 
                                        Contact
                                </NavLink>
                            </li>
                            <li class="main-multiple-sec-container">
                                <NavLink className="nav-link" to="/form"> 
                                        Form
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}

export default navbar
