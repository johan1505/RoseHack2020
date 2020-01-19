import React, { Component } from 'react';
import { TiWeatherCloudy } from "react-icons/ti"

class WeatherPage extends Component {
    render() {
        return (
            <div>
               <h1>Weather Page</h1>
               <div className = "row">
                    <div className = "col">
                        <TiWeatherCloudy size={20*14}/>
                        <br></br>
                        <font size = "7"> Temperature </font>
                        <br/>
                        <br/>
                        <font size = "5"> It is humid.</font>
                        <br/>
                        <br/>
                        <font size = "5"> It is windy.</font>
                    </div> 
                    <div className = "col">
                        <font size = "6"> This is the right column </font>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherPage;