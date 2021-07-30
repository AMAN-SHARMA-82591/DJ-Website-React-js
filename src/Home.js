import React from 'react'
import img1 from './Images/Image-home.jpg'
import Party from './Party'

function Home() {
    return (
        <div>
                <img className="home-img1" src={img1} alt="front-logo"></img>
                <div className="party-section-home">
                    <Party name="PARTY" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                    <Party name="DANCE" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                    <Party name="MUSIC" paragraph="This section is mainly based on how the different kind of things work in the things of many things which may sound crazy but these things are serious." />
                </div>
        </div>
    )
}

export default Home
