import React, { Component } from 'react';
import logo from './../../../images/logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <div id="head">
                <img className="head-item" src={logo} alt="logo" />
                <h2 className="head-item">Sign To Seminar</h2>
            </div>
        )
    }
}
