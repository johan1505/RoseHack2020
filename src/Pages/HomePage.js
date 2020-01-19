import React, { Component } from 'react';
import Form from '../Components/Form';
import Weather from '../Pages/WeatherPage'

const API_KEY = "9a693cabc0c6544c67fbc7f797936634";

class HomePage extends Component {

    state = {
        temperature : 53,
        mainDescription: null,
        humidity: null,
        wind: null
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }

    render() {
        return (
            <div className="center">
                <h1 className="header1"> Weather</h1>    
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}/>
            </div>
        );
    }
}

export default HomePage;