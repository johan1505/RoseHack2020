import React, { Component } from 'react'


class Form extends Component {
    render() {
        return (
        <form onSubmit = {this.props.getWeather}>
            <div>
                <input 
                    className="inputField"
                    type="text"
                    name="city"
                    placeholder="City Name..."
                    autoComplete="off"
                />
            </div>
            <div>
                <button className="btn"> Generate Report </button>
            </div>
        </form>
        );
    }
}

export default Form