import React from 'react'
import './App.css';
import About from './about';
import Navbar from './navbar'
import Contact from './Contact'
import {Redirect,Switch,Route} from 'react-router-dom'
import Home from './Home'
import Shows from './Shows';
import Footer from './Footer';
import Events from './Events'
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/events" component={Events}></Route>
          <Route exact path="/about" component ={About}></Route>
          <Route exact path="/contact" component ={Contact}></Route>
          <Route exact path="/Shows" component ={Shows}></Route>
          <Redirect to="/"></Redirect>
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
