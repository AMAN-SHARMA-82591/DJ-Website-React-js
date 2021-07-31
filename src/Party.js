import React from 'react'
import './App.css'
function Party(props) {
    return (
        <div>
                <div className="party-section">
                    <img className="party-image" alt="partyImage" src={props.image}></img>
                    <div className="party-sec-item-2">
                        <h1 className="party-heading">{props.name}</h1>
                        <p className="party-paragraph">{props.paragraph}</p>
                    </div>
                </div>
        </div>
    )
}

export default Party
