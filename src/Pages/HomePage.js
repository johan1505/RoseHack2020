import React, { Component } from 'react';
import Form from '../Components/Form';
import Weather from '../Pages/WeatherPage'

const API_KEY = "9a693cabc0c6544c67fbc7f797936634";

class HomePage extends Component {

    state = {
        temperature : null,
        mainDescription: null,
        humidity: null,
        wind: null
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({
            mainDescription : data.weather[0].description,
            temperature : data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed
        })
        console.log(data);
    }

    render() {
        return (
            <div className="center">
                <h1 className="header1"> Weather</h1>
                <div className="row">
                    <div className="col">
                        <Form getWeather={this.getWeather}/>
                    </div>
                    <div className="col">
                        <Weather wind={this.state.wind} humidity={this.state.humidity} description={this.state.mainDescription} temperature={this.state.temperature}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;