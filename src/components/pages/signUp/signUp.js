import React, { Component } from 'react';

import InfoBox from './infoBox/infoBox';
import Form from './form/form';
import './signUp.css';

export default class SignUp extends Component {
    render() {
        return (
            <>
                <section id="form-section">   
                    <InfoBox />
                    <Form id={this.props.id} />
                </section>            
            </>
        )
    }
}
