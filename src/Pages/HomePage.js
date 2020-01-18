import React, { Component } from 'react';
import Form from '../Components/Form';

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