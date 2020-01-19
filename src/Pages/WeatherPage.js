import React, { Component } from 'react';
import {WiCloud, WiRain, WiSnow, WiSprinkle, WiThunderstorm, WiFog, WiDaySunny} from "react-icons/wi"

class WeatherPage extends Component {
    render() {
        return (
            <div className="WeatherDiv">
                {this.props.description === "Clouds" && <WiCloud className="icon fadeIn"/>}
                {this.props.description === "Rain" && <WiRain className="icon fadeIn"/>}
                {this.props.description === "Thunderstorm" && <WiThunderstorm className="icon fadeIn"/>}
                {this.props.description === "Drizzle" && <WiSprinkle className="icon fadeIn"/>}
                {this.props.description === "Snow" && <WiSnow className="icon fadeIn"/>}
                {this.props.description === "Clear" && <WiDaySunny className="icon fadeIn"/>}
                {this.props.description === "Mist" && <WiFog className="icon fadeIn"/>}
                <br/>
                {this.props.temperature && <div className="attribute-big"> {this.props.temperature}° C</div>}
                <br/>
                {this.props.description && <div className="attribute-big fadeIn"> {this.props.description} </div>}
                <br/>
                {this.props.humidity && <div className="attribute fadeIn"> Humidity: {this.props.humidity}% </div>}
                <br/>
                {this.props.wind && <div className="attribute fadeIn"> Wind Speed: {this.props.wind} m/s {this.props.direction}</div>}
            </div>
        );
    }
}

export default WeatherPage;