import React from 'react'

function EventsContainer(props) {
    return (
        <div className="events-section">
            <div className="events-sec-container">
                        <h1>{props.heading}</h1>
                        <p>Events every night, join with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ad!</p>
                        <button>JOIN US</button>
                    </div>
        </div>
    )
}

export default EventsContainer
