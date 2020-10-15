import React, { Component } from 'react'

import cup from '../../../../images/cup.svg';

export default class InfoBox extends Component {
    render() {
        return (
            <div id="info-container">

                <h2>Sign up for British Humour!</h2> 
                <p>Date: January 2020
                <br/>Time: 5pm
                <br/>Place: Street City
                </p>
                <img src={cup} alt="cup" />

            </div> 
        )
    }
}
