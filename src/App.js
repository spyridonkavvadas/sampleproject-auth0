
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Project from './Project';
import Content from './Content';
import Home from './Home';
//import LoginButton from './components/LoginButton';
//import LogoutButton from './components/LogoutButton';
//import Navbar from './components/Navbar';
import Navigation from './components/Navigation';


function App() {

  return (

    <Router basename='/sampleproject'>
      <Navigation />
      
      
      <div className="App">
        <Switch>

        <Route exact path="/" component={Home}>
            <Home />
          </Route>

          <Route exact path="/project" component={Project}>
            <Project />
          </Route>

          <Route path="/content/:id">
            <Content />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
export default App;