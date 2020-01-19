import React, { Component } from 'react';
import { IoMdWarning } from "react-icons/io";
class Warnings extends Component {
    render() {
        return (
            <div className="warnings fadeIn">
                {this.props.uv >= 6 && this.props.uv <= 7 && <span> UV Index: {this.props.uv} - High <IoMdWarning/></span>}
                {this.props.uv >= 8 && this.props.uv <= 10 && <span>UV Index: {this.props.uv} - Very High <IoMdWarning/></span>}
                {this.props.uv > 11 && <span>UV Index: {this.props.uv} - Extreme <IoMdWarning/></span>}
            </div>
        );
    }
}

export default Warnings;