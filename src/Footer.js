import React from 'react'
import foot1 from './Images/place-3.jpg'
import './App.css'

function Footer() {
    return (
        <div className="main-footer-container">
                <div class="about-section-footer">
                        <div class="about-sec-items-1">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni exercitationem provident accusamus sit illo ipsam incidunt harum sunt repellendus?</p>
                        </div>

                </div>
                <div class="follow-section-footer">
                    <div class="follow-sec-items-1">
                        <h1>Follow Us</h1>
                        <div class="links-footer">
                            <p>f</p>
                            <p>f</p>
                            <p>f</p>
                            <p>f</p>
                        </div>
                    </div>
                    <div class="follow-sec-items-2">
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>

                </div>
                <div class="video-section-footer">
                        <div class="video-sec-items-1">
                            <h1>Watch Video</h1>
                            <img src={foot1} alt="footer-1" />
                        </div>

                </div>
        </div>
    )
}

export default Footer
