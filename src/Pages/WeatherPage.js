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
            <div className="WeatherDiv">
                    <WiCloudy size={10*14}/>
                    <br/>
                    {this.props.temperature && <font size = "7"> {this.props.temperature}°</font>}
                    <br/>
                    <font size = "7"> {this.props.description} </font>
                    <br/>
                    <font size = "5"> {this.props.humidity}</font>
                    <br/>
                    <font size = "5">{this.props.wind} </font>
            </div>
        );
    }
}

export default WeatherPage;