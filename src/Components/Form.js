import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
        <form>
                <div className="inputField">
                    <input type="text" name="cityName" placeholder="City Name..." />
                </div>
                <div>
                    <button className="btn"> Generate <br/> Playlist </button>
                </div>
        </form>
        );
    }
}

export default Form