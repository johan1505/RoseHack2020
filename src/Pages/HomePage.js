import React, { Component } from 'react';
import { WiBarometer } from "react-icons/wi"

class HomePage extends Component {
    render() {
        return (
            <div>
                <WiBarometer size = {20*14} /> 
                <h1>Home Page</h1>
            </div>
        );
    }
}

export default HomePage;