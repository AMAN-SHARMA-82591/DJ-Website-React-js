import React from 'react'
import './App.css';
import About from './about';
import Navbar from './navbar'
import Contact from './Contact'
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
import Form from './Form';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component ={About}></Route>
          <Route exact path="/contact" component ={Contact}></Route>
          <Route exact path="/form" component ={Form}></Route>
        </Switch>
    </div>
  );
}

export default App;
