import React from "react";
import EventsContainer from "./EventsContainer";
import Imgrock from "./Images/img_4.jpg";

function About() {
  return (
    <div className="about-container-main">
      <EventsContainer section="about" />

      <div className="about-sec-section-2">
        <div className="about-sec-item-1">
          <img className="about-sec-img" src={Imgrock} alt=""></img>
        </div>
        <div className="about-sec-item-2">
          <h1>We Love Music</h1>
          <h3>Join With Us Today</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            facere a excepturi quod impedit rerum ipsum totam incidunt,
            necessitatibus id veritatis maiores quos saepe dolore commodi magnam
            fugiat. Incidunt, omnis.
            <br></br>
            <br></br>
            Nobis quae eaque facere architecto eligendi, voluptas quasi,
            blanditiis aperiam possimus inventore quis nam! Cupiditate
            necessitatibus, voluptatem excepturi placeat exercitationem quos
            vitae ut vero dolorem, provident sit odio porro facere.
          </p>
          <button>JOIN US</button>
        </div>
      </div>
    </div>
  );
}

export default About;
