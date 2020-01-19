import React, { Component } from 'react';
import { WiWindy, WiCloud } from "react-icons/wi"
import { WiRain } from "react-icons/wi"
import { WiSnow } from "react-icons/wi"
import { WiSprinkle } from "react-icons/wi"
import { WiThunderstorm } from "react-icons/wi"
import { WiFog} from "react-icons/wi"
import { WiHail } from "react-icons/wi"
import { WiDaySunny} from "react-icons/wi"
import { WiNightClear } from "react-icons/wi"


class WeatherPage extends Component {
    render() {
        return (
            <div className="WeatherDiv">
                    {this.props.description === "Clouds" && <WiCloud size={10*14}/>}
                    {this.props.description === "Rain" && <WiRain size={10*14}/>}
                    {this.props.description === "Thunderstorm" && <WiThunderstorm size={10*14}/>}
                    {this.props.description === "Drizzle" && <WiSprinkle size={10*14}/>}
                    {this.props.description === "Snow" && <WiSnow size={10*14}/>}
                    {this.props.description === "Clear" && <WiDaySunny size={10*14}/>}
                    {this.props.description === "Fog" && <WiFog size={10*14}/>}
                    <br/>
                    {this.props.temperature && <div className="attribute-big fadeIn"> {this.props.temperature}° C</div>}
                    <br/>
                    {this.props.description && <div className="attribute-big"> {this.props.description} </div>}
                    <br/>
                    {this.props.humidity && <div className="attribute"> Humidity: {this.props.humidity}% </div>}
                    <br/>
                    {this.props.wind && <div className="attribute"> Wind Speed: {this.props.wind} m/s {this.props.direction}</div>}
            </div>
        );
    }
}

export default WeatherPage;