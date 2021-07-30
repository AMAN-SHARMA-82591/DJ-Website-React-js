import React from 'react'
import './App.css'
function Team(props) {
    return (
        <div className="team-section">
            <div className="team-container">
                <img className="team-image" alt={props.alt} src={props.img} />
                <div className="team-hidden-items">
                    <h1> {props.name} </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vel officiis ab consectetur accusamus? Sint, est. Porro distinctio sequi nemo.</p>
                </div>
            </div>
        </div>
    )
}

export default Team
