import React, { Component } from 'react';

import InfoBox from './infoBox/infoBox';
import Form from './form/form';
import cup from './../../../images/cup.svg'; 
import './signUp.css';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = { seminar: null }
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) this.fetchSeminar();
    }
    fetchSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.props.id)
            .then((response) => response.json())
            .then((json) => this.setState({ seminar: json }));
    }
    render() {
        return (
            <>
                {this.state.seminar != null ? (
                    <section id="form-section">
                    <div id="info-container">
                        <h2>Sign up for {this.state.seminar.name}!</h2> 
                        <InfoBox id={this.props.id} />
                        <img src={cup} alt="cup" />
                    </div>
                    <span id="form-container">
                        <Form id={this.props.id} />
                    </span>
                </section>
                ) : null }      
            </>
        )
    }
}
