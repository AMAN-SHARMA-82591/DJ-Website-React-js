import React from 'react'

function showsParty(props) {
    return (
        <div className="shows-party-container">
            <div className="shows-party-image-cont">
                <img src={props.partyImage} alt="" />
            </div>
            <div className="shows-party-text-cont">
                <h1>{props.showsPartyHeading}</h1>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.</h3>
            </div>
        </div>
    )
}

export default showsParty
