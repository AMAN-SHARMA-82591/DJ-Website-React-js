import React, { useCallback, useEffect, useState } from "react";
import { truncate } from "lodash";
import Party from "./Party";
import Team from "./Team";
import Upcoming from "./Upcoming";
import PartyImage from "./Images/blurry-1854113_960_720.jpg";
import person1 from "./Images/person_1.jpg";
import person2 from "./Images/person_2.jpg";
import person3 from "./Images/person_3.jpg";
import person4 from "./Images/person_4.jpg";
import "./App.css";
import EventsContainer from "./EventsContainer";
import { FeaturedItemsSkeleton } from "./components/Skeleton";

const description = [
  "Step into a world where beats meet passion! Our handpicked selection of events ensures an exhilarating journey through sound, art, and community.",
  "Experience the ultimate fusion of music and culture with our latest featured event. A night of electrifying performances, immersive visuals, and unforgettable moments awaits!",
  "Get ready for an extraordinary experience! From high-energy performances to mesmerizing visuals, our featured events bring the best of entertainment straight to you.",
];

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchFeaturedItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.goabase.net/api/party/json/?limit=3&eventtype=festival`
      );
      const result = await response.json();
      if (result.partylist) {
        setData(result.partylist);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    handleFetchFeaturedItems();
  }, [handleFetchFeaturedItems]);

  return (
    <>
      <div className="party-main-section">
        <EventsContainer section="home" />
        <h1 className="home-heading">Featured Items</h1>
        <div className="party-section-home">
          {loading ? (
            Array(3)
              .fill(null)
              .map((_, i) => <FeaturedItemsSkeleton key={i} />)
          ) : data.length > 0 ? (
            data.map((event, i) => (
              <Party
                key={event.id}
                id={event.id}
                date={new Date(event.dateCreated).toLocaleDateString()}
                image={event.urlImageMedium || PartyImage}
                name={
                  truncate(event.nameParty, { length: 30 }) || "Unknown Party"
                }
                paragraph={description[i]}
              />
            ))
          ) : (
            <h1 className="events-empty-data">No data available</h1>
          )}
        </div>
      </div>
      <div className="upcoming-section-home">
        <h1 className="upcoming-event-heading">Upcoming Events</h1>
        <Upcoming />
      </div>
      <div className="team-main-section">
        <h1 className="team-main-heading"> Our Team</h1>
        <div className="team-main-sec-items">
          <div>
            <Team
              className="team-item1"
              img={person1}
              alt="person1"
              name="Jim Parson"
            />
            <Team
              className="team-item1"
              img={person2}
              alt="person2"
              name="Harry Bran"
            />
          </div>
          <div>
            <Team
              className="team-item1"
              img={person3}
              alt="person3"
              name="Karl Blue"
            />
            <Team
              className="team-item1"
              img={person4}
              alt="person4"
              name="Erika Clark"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
