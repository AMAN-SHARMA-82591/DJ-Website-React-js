import React from 'react'
import EventsContainer from './EventsContainer'
import ShowsParty from './showsParty'
import ShowImg from './Images/img_2.jpg'
import ShowImg2 from './Images/img_4.jpg'
import showImg3 from './Images/2.jpg'

function Shows() {
    return (
        <div>
                <img className="home-img1" src={showImg3} alt="front-logo"></img>

            <EventsContainer heading='Shows' />

            <div>
            </div>
                <ShowsParty partyImage={ShowImg} showsPartyHeading='Slam Party'/>
                <ShowsParty partyImage={ShowImg2} showsPartyHeading='Love For My City'/>
                <ShowsParty partyImage={ShowImg} showsPartyHeading='Music Night Fest'/>
                <ShowsParty partyImage={ShowImg2} showsPartyHeading='Slam Party'/>
                <ShowsParty partyImage={ShowImg} showsPartyHeading="Don't Waste My Time"/>
                <ShowsParty partyImage={ShowImg2} showsPartyHeading='Slam Party'/>
                <ShowsParty partyImage={ShowImg} showsPartyHeading='Hip Hop Songs'/>

        </div>

    )
}

export default Shows
