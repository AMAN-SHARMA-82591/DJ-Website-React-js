import React from 'react'
import './App.css'
import EventsTime from './EventsTime'
import Img1 from './Images/1.jpg'
import Img2 from './Images/img_2.jpg'
import Img3 from './Images/3.jpg'
import Img4 from './Images/img_4.jpg'
import Img5 from './Images/person_6.jpg'
import Img6 from './Images/hero_bg_1.jpg'
import EventsContainer from './EventsContainer'
function Events() {
    return (
        <>
            <section className="events-section-main">
                 <img className="home-img1" src={Img1} alt="front-logo"></img>
                        <EventsContainer heading="Events & Shows" />
                    <div className="Events-timing">
                        <EventsTime image={Img1} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        <EventsTime image={Img2} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        <EventsTime image={Img3} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        <EventsTime image={Img4} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        <EventsTime image={Img5} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        <EventsTime image={Img6} date='JAN 24TH 2022' partyName="Music Night Fest Party" />
                        

                    </div>
            </section>
        </>
    )
}

export default Events
