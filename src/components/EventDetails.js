import React, { useCallback, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import defaultImg from "../Images/2.jpg";

const event = {
  name: "Music Festival 2025",
  date: "April 15, 2025",
  image: "https://example.com/event-image.jpg",
  description:
    "Join us for an unforgettable music festival featuring top artists!",
  link: "https://example.com/event-details",
};
function EventDetails(props) {
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    match: {
      params: { id },
    },
  } = props;

  const fetchEventData = useCallback(async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.goabase.net/api/party/jsonld/${id}`
      );
      const result = await response.json();
      if (result) {
        setEventDetails(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setEventDetails([]);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData]);

  if (loading) {
    return (
      <div className="spinner-container">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#ffff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className="event-details-container">
      <div className="event-details-header">
        <h1>{eventDetails.name || "Event Name"}</h1>
        <p className="event-date">
          {new Date(eventDetails.startDate).toLocaleDateString() ||
            "Event Date"}
        </p>
      </div>
      <div className="event-details-body">
        <img
          src={eventDetails.image.url || defaultImg}
          alt={eventDetails.name}
          className="event-image"
        />
        <p className="event-description">
          {eventDetails.description ||
            "No description available for this event."}
        </p>
      </div>
      <div className="event-details-footer">
        <a
          href={eventDetails.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default EventDetails;
