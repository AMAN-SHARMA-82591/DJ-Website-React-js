import React from 'react'
import EventsContainer from './EventsContainer'
import blurry from './Images/blurry-1854113_960_720.jpg'
function contact() {
    return (
        <div className="contact-main-section">
                 <img className="home-img1" src={blurry} alt="front-logo"></img>

            <div className="contact-sec-container">
                        <EventsContainer heading="Contacts"/>
            </div>
            <div className="contact-sec-cont-2">
                 <h1 className="contact-sec-heading">Form</h1>
                    <div className="contact-sec-items">
                        
                        <div className="form-details">
                            <form>
                                <label class="contact-label"  for="">Full Name</label>
                                <input class="contact-input" type="text" placeholder="Full Name" />

                                <label class="contact-label"  for="">Email</label>
                                <input class="contact-input" type="text" placeholder="Email Address" />

                                <label class="contact-label"  for="">Subject</label>
                                <input  class="contact-input" type="text" placeholder="Subject" />

                                <label class="contact-label"  for="">Message</label>
                                <textarea  class="contact-input" name="" id="" cols="30" rows="6" placeholder="Enter The Text"></textarea>
                            </form>
                        </div>
                        <div className="contact-info">
                                <h1 className="main-cont-head">Contact Info</h1>
                                <div class="address-contact">
                                    <h1>Address</h1>
                                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div class="phone-contact">
                                    <h1>Phone</h1>
                                    <p>+1 232 4354 655</p>
                                </div>
                                <div class="email-contact">
                                    <h1>Email Address</h1>
                                    <p>youremail124@domain.com</p>
                                </div>


                        </div>
                    </div>

            </div>
        </div>
    )
}

export default contact
