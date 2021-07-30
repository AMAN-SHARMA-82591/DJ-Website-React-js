import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';

function navbar() {
    return (
        <>
                <nav>
                    <div className="main-logo">
                        <NavLink className="logo-nav" to="/">DJ<span>.</span></NavLink>
                    </div>
                    <div className="main-sections">
                        <ul>
                            <li className="main-multiple-sec-container">
                                <NavLink to="/home">
                                        Home
                                </NavLink>
                            </li>
                            <li className="main-multiple-sec-container">
                                <NavLink to="/about"> 
                                        About
                                </NavLink>
                            </li>
                            <li className="main-multiple-sec-container">
                                <NavLink to="/contact"> 
                                        Contact
                                </NavLink>
                            </li>
                            <li className="main-multiple-sec-container">
                                <NavLink to="/form"> 
                                        Form
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}

export default navbar
