import { truncate } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

function EventsTime(props) {
  return (
    <Link to={`/events/${props.id}`} className="party-link">
      <div className="events-time-section">
        <img
          className="events-t-sec-image"
          src={props.image}
          alt={props.partyName}
        ></img>
        <div className="events-t-sec-cont">
          <p className="events-t-sec-date">
            {new Date(props.date).toLocaleDateString()}
          </p>
          <h1 className="events-t-sec-name">
            {truncate(props.partyName, { length: 47 })}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default EventsTime;
