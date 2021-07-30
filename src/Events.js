import React from 'react'
import './App.css'
import EventsTime from './EventsTime'
import Img1 from './Images/1.jpg'
import Img2 from './Images/img_2.jpg'
import Img3 from './Images/3.jpg'
import Img4 from './Images/img_4.jpg'
import Img5 from './Images/person_6.jpg'
import Img6 from './Images/hero_bg_1.jpg'
function Events() {
    return (
        <>
            <section className="events-section">
                    <div class="events-sec-container">
                        <h1>Events & Shows</h1>
                        <p>Events every night, join with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ad!</p>
                        <button>JOIN US</button>
                    </div>
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
