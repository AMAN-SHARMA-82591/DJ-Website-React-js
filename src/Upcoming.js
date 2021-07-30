import React from 'react'
import UpImg1 from './Images/4.jpg';
import UpImg2 from './Images/2.jpg';
import UpImg3 from './Images/3.jpg';

function Upcoming() {
    return (
        <div className="upcoming-section">
            <div className="upcoming-section-1">
                <img className="upcoming-img-1" alt="img1" src = {UpImg1}></img>
            </div>
            <div className="upcoming-section-2">
                <img className="upcoming-img-2" alt="img2" src = {UpImg2}></img>
                <img className="upcoming-img-3" alt="img1" src = {UpImg3}></img>
            </div>
        </div>
    )
}

export default Upcoming

