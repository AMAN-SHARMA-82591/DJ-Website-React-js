import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Party(props) {
  return (
    <Link to={`/events/${props.id}`} className="party-link">
      <div className="party-section">
        <img className="party-image" alt="partyImage" src={props.image}></img>
        <div className="party-sec-item-2">
          <div>
            <h1 className="party-heading">{props.name}</h1>
            <span>{props.date}</span>
          </div>
          <p className="party-paragraph">{props.paragraph}</p>
        </div>
      </div>
    </Link>
  );
}

export default Party;
