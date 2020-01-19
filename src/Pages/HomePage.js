import React, { Component } from 'react';
import Form from '../Components/Form';
import Weather from '../Pages/WeatherPage'
import { WiMoonAltWaningGibbous3 } from 'react-icons/wi';
import Warnings from '../Components/Warnings';


const API_KEY = "9a693cabc0c6544c67fbc7f797936634";

class HomePage extends Component {

    state = {
        //Main information
        temperature : null,
        mainDescription: null,
        humidity: null,
        wind: null,
        error: null,
        direction: null,
        //Warnings
        uvIndex: null
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
                direction: this.getDegree(data.wind.deg),
                uvIndex: await this.getUVIndex(data.coord.lat, data.coord.lon)
            })
            console.log(data);
        }
        else {// No city name inputted
            this.displayError();
        }
    }

    getUVIndex = async (lat, lon) => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${lat}&lon=${lon}`);
        const data = await api_call.json();
        console.log(data);
        return data.value;
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

    displayError = () => {
        this.setState({
            temperature : null,
            mainDescription: null,
            humidity: null,
            wind: null,
            uvIndex: null,
            error: "Please enter a valid city name!"
        });
    }
    render() {
        return (
            <div className="center">
                <div className="row" >
                    <div className="col mt-5 mr-5">
                        <h1 className="main-header "><WiMoonAltWaningGibbous3/> <br/> Weather Informer </h1>
                        <Form getWeather={this.getWeather}/>
                        {this.state.error && <div className="error">{this.state.error}</div>}
                    </div>
                    <div className="col display-container ml-5">
                        {this.state.temperature && 
                            <div> 
                                <Weather wind={this.state.wind} humidity={this.state.humidity} description={this.state.mainDescription} temperature={this.state.temperature} direction={this.state.direction}/>
                                <Warnings uv = {this.state.uvIndex}/>
                            </div>   
                        }
                        {!this.state.temperature &&
                            <h1 style={{marginTop:260}}>Enter a city name!</h1>
                        }                        
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;