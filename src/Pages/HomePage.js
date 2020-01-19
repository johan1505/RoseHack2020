import React, { Component } from 'react';
import Form from '../Components/Form';

// const API_KEY = "9a693cabc0c6544c67fbc7f797936634";

class HomePage extends Component {
 
    render() {
        return (
            <div className="center">
                <h1 className="header1">Weather</h1>    
                <Form/>
            </div>
        );
    }
}

export default HomePage;