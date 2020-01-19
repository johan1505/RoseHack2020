import React, { Component } from 'react';
import { WiWindy } from "react-icons/wi"
import { WiCloudy } from "react-icons/wi"
import { WiCloudyWindy } from "react-icons/wi"
import { WiRain } from "react-icons/wi"
import { WiRainWind } from "react-icons/wi"
import { WiSnow } from "react-icons/wi"
import { WiSnowWind } from "react-icons/wi"
import { WiSprinkle } from "react-icons/wi"
import { WiShowers } from "react-icons/wi"
import { WiThunderstorm } from "react-icons/wi"
import { WiFog} from "react-icons/wi"
import { WiHail } from "react-icons/wi"
import { WiDegrees } from "react-icons/wi"
import { WiDaySunny} from "react-icons/wi"
import { WiNightClear } from "react-icons/wi"


class WeatherPage extends Component {
    render() {
        return (
            <div className = "WeatherDiv">
               <h1>Weather Page</h1>
               <div className = "row">
                    <div className = "col">
                        <font size = "5"> This is the left column </font>
                    </div>
                    <div className = "col">
                        <WiCloudy size={20*14}/>
                        <br></br>
                        <font size = "7"> {this.props.temp} </font>
                        <br/>
                        <br/>
                        <font size = "5"> It is humid.</font>
                        <br/>
                        <br/>
                        <font size = "5"> It is windy.</font>
                    </div> 
                </div>
            </div>
        );
    }
}

export default WeatherPage;