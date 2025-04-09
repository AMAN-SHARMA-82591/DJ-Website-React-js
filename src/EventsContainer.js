import React from "react";
import img1 from "./Images/Image-home.jpg";
import herobg from "./Images/hero_bg_1.jpg";
import blurry from "./Images/blurry-1854113_960_720.jpg";
import eventsImg from "./Images/1.jpg";

const sectionData = {
  home: {
    title: "Music Fest",
    description:
      " Welcome to the ultimate destination for music lovers! At DJ Music Fest, we bring the beats and energy to every night. Let the rhythmmove you!",
    image: img1,
  },
  about: {
    title: "About",
    description:
      "We bring passion, energy, and unforgettable experiences to every beat. From festivals to intimate gatherings, our music creates lasting memories and lights up the night.",
    image: herobg,
  },
  contact: {
    title: "Contact",
    description:
      "Ready to connect? Drop us a message or call, and let’s make your event unforgettable!",
    image: blurry,
  },
  events: {
    title: "Events",
    description:
      "Events every night, join with us! Lorem ipsum dolor sit amet,consectetur adipisicing elit. Adipisci, ad!",
    image: eventsImg,
  },
};

function EventsContainer({ section }) {
  const sectionDetails = sectionData[section];
  return (
    <div className="events-section">
      <div className="events-sec-container">
        <h1>{sectionDetails.title ?? "Title"}</h1>
        <p>{sectionDetails.description ?? "Description"}</p>
      </div>
      <img
        className="home-img1"
        src={sectionDetails.image || herobg}
        alt={sectionDetails.title}
      />
    </div>
  );
}

export default EventsContainer;
