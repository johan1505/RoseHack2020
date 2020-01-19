import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WeatherPage from "./Pages/WeatherPage";


class App extends Component {
  render(){
    return (
    <div className="App container">
      <Route path="/" exact component={HomePage} />
    </div>
  );
  }
}

export default App;
