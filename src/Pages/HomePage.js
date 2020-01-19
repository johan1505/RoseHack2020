import React, { Component } from 'react';
import Form from '../Components/Form';
import Weather from '../Pages/WeatherPage'
import { WiMoonAltWaningGibbous3 } from 'react-icons/wi';


const API_KEY = "9a693cabc0c6544c67fbc7f797936634";

class HomePage extends Component {

    state = {
        temperature : null,
        mainDescription: null,
        humidity: null,
        wind: null,
        error: null,
        direction: null
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city){
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
            this.setState({
                mainDescription : data.weather[0].main,
                temperature : data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                error:null,
                direction: this.getDegree(data.wind.deg)
            })
            //const direction = this.getDegree(data.wind.deg);
            // this.setState({ 
            //     direction: direction

            // }) 
            //console.log(direction);
            console.log(data);
        }
        else {// No city name inputted
            this.setState({
                temperature : null,
                mainDescription: null,
                humidity: null,
                wind: null,
                error: "Please enter a valid city name!"
            })
        }
    }
    getDegree = (degree) => {
        if (degree >= 0 && degree <= 22) {
            return "North";
        }
        else if (degree > 22 && degree <= 67) {
            return "North East";
        }
        else if (degree > 67 && degree <= 112) {
            return "East";
        }
        else if (degree > 112 && degree <= 157) {
            return "South East";
        }
        else if (degree > 157 && degree <= 202) {
            return "South";
        }
        else if (degree > 202 && degree <= 247) {
            return "South West";
        }
        else if (degree > 247 && degree <= 292) {
            return "West";
        }
        else if (degree > 202 && degree <= 247) {
            return "North West";
        }
        else if (degree > 247) {
            return "North";
        }
    }

    render() {
        return (
            <div className="center">
                <div className="row" >
                    <div className="col">
                        <h1 className="header1"><WiMoonAltWaningGibbous3/> <br/> Weather</h1>
                        <Form getWeather={this.getWeather}/>
                        {this.state.error && <div className="error">{this.state.error}</div>}
                    </div>
                    <div className="col">
                        <Weather wind={this.state.wind} humidity={this.state.humidity} description={this.state.mainDescription} temperature={this.state.temperature} direction={this.state.direction}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;