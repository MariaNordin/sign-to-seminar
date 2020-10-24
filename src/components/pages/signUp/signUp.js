import React, { Component } from 'react';

import InfoBox from './infoBox/infoBox';
import Form from './form/form';
import cup from './../../../images/cup.svg'; 
import './signUp.css';

export default class SignUp extends Component {
    render() {
        return (
            <>
                <section id="form-section">
                    <div id="info-container">
                        <h2>Sign up for {this.props.name}!</h2> 
                        <InfoBox date={this.props.date} />
                        <img src={cup} alt="cup" />
                    </div>
                    <span id="form-container">
                        <Form id={this.props.id} />
                    </span>
                </section>     
            </>
        )
    }
}
