import React, { Component } from 'react'


class Form extends Component {
    render() {
        return (
        <form onSubmit = {this.props.getWeather} className="userForm">
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
                <button className="btn btn-info mt-5"> Generate Report </button>
            </div>
        </form>
        );
    }
}

export default Form