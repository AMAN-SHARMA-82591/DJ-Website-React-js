import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import EventsTime from "./EventsTime";
import Img3 from "./Images/3.jpg";
import EventsContainer from "./EventsContainer";
import { TailSpin } from "react-loader-spinner";

// APIs
// Website: https://www.goabase.net/api/party/
// https://www.goabase.net/api/party/json/?limit=101
// All Data: https://www.goabase.net/api/party/json/?country=list-all
// Details: https://www.goabase.net/api/party/jsonld/114953

let debounceTimeout;

function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchEventData = useCallback(async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.goabase.net/api/party/json/?limit=51&search=${query}`
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

  const handleSearchEvent = (event) => {
    const value = event.target.value;

    setSearchQuery(value);

    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      fetchEventData(value);
    }, 1000);
  };

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData]);

  return (
    <section className="events-section-main">
      <EventsContainer section="events" />
      <div className="events-search">
        <h1>Events List</h1>
        <input
          type="text"
          value={searchQuery}
          disabled={loading}
          className="search-input"
          onChange={handleSearchEvent}
          placeholder="Search for events"
        />
      </div>
      <div className="Events-timing">
        {loading ? (
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
        ) : data.length > 0 ? (
          data.map((event) => (
            <EventsTime
              key={event.id}
              id={event.id}
              image={event.urlImageMedium || Img3}
              date={event.dateStart || "Unknown Date"}
              partyName={event.nameParty || "Unknown Party"}
            />
          ))
        ) : (
          <h1 className="events-empty-data">No data available</h1>
        )}
      </div>
    </section>
  );
}

export default Events;
