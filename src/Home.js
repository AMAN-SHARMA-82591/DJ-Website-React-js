import React from 'react'
import img1 from './Images/Image-home.jpg'
import Party from './Party'
import Team from './Team'
import Upcoming from './Upcoming'
import PartyImage from './Images/blurry-1854113_960_720.jpg'
import Img2 from './Images/img_2.jpg'
import Img3 from './Images/img_4.jpg'
import person1 from './Images/person_1.jpg'
import person2 from './Images/person_2.jpg'
import person3 from './Images/person_3.jpg'
import person4 from './Images/person_4.jpg'
import './App.css'
import EventsContainer from './EventsContainer'

function Home() {
    return (
        <div>

                <div className="party-main-section">
                            <EventsContainer heading="Music Fest - DJ Snake" />
                            <h1 className="home-heading">Featured Items</h1>

                        <img className="home-img1" src={img1} alt="front-logo"></img>
                        <div className="party-section-home">
                            <Party image={PartyImage} name="PARTY" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                            <Party image={Img2} name="DANCE" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                            <Party image={Img3} name="MUSIC" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                        </div>
                </div>
                <div className="upcoming-section-home">
                        <h1 className="upcoming-event-heading">Upcoming Events</h1>
                        <Upcoming></Upcoming>
                </div>
                <div className="team-main-section">
                        <h1 className="team-main-heading"> Our Team</h1>
                        <div className="team-main-sec-items">
                                <div className="team-main-sec-item-1">
                                    <Team className="team-item1" img={person1} alt="person1" name="Jim Parson"/>
                                    <Team className="team-item1" img={person2} alt="person2" name="Harry Bran"/>
                                </div>
                            <div>
                                    <Team className="team-item1" img={person3} alt="person3" name="Karl Blue"/>
                                    <Team className="team-item1" img={person4} alt="person4" name="Erika Clark"/>
                            </div>
                       </div>
                        
                </div>
        </div>
    )
}

export default Home
