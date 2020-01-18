import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WeatherPage from "./Pages/WeatherPage";
function App() {
  return (
    <div className="App container">
      <Route path="/" exact component={HomePage} />
      <Route path="/weather" exact component={WeatherPage} />
    </div>
  );
}

export default App;
