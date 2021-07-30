import React from 'react'

function EventsTime(props) {
    return (
        <div>
                <div className="events-time-section">
                    <img className="events-t-sec-image" src={props.image} alt=""></img>
                    <div className="events-t-sec-cont">
                        <p className="events-t-sec-date">{props.date}</p>
                        <h1 className="events-t-sec-name">{props.partyName}</h1>
                    </div>
                </div>
        </div>
    )
}

export default EventsTime
