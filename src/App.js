import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shows from "./Shows";
import About from "./About";
import Footer from "./Footer";
import Events from "./Events";
import Navbar from "./navbar";
import Contact from "./Contact";
import EventDetails from "./components/EventDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/events" component={Events}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/Shows" component={Shows}></Route>
        <Route exact path="/events/:id" component={EventDetails}></Route>
        <Redirect to="/"></Redirect>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
