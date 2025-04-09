import React from "react";
import EventsContainer from "./EventsContainer";
function contact() {
  return (
    <div className="contact-main-section">
      <EventsContainer section="contact" />
      <div className="contact-sec-cont-2">
        <h1 className="contact-sec-heading">Form</h1>
        <div className="contact-sec-items">
          <div className="form-details">
            <form>
              <label class="contact-label" for="">
                Full Name
              </label>
              <input
                class="contact-input"
                type="text"
                placeholder="Full Name"
              />

              <label class="contact-label" for="">
                Email
              </label>
              <input
                class="contact-input"
                type="text"
                placeholder="Email Address"
              />

              <label class="contact-label" for="">
                Subject
              </label>
              <input class="contact-input" type="text" placeholder="Subject" />

              <label class="contact-label" for="">
                Message
              </label>
              <textarea
                class="contact-input"
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Enter The Text"
              ></textarea>
            </form>
          </div>
          <div className="contact-info">
            <h1 className="main-cont-head">Contact Info</h1>
            <div class="address-contact">
              <h1>Address</h1>
              <p>P.O. Shamti, Solan, Himachal Pradesh 173212</p>
            </div>
            <div class="phone-contact">
              <h1>Phone</h1>
              <p>+91 70184-85120</p>
            </div>
            <div class="email-contact">
              <h1>Email Address</h1>
              <p>aman82591@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
