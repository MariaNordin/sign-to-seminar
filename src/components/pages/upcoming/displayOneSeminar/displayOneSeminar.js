import React, { Component } from 'react';

import cup from './../../../../images/cup.svg';
import InfoBox from './../../signUp/infoBox/infoBox';
import ButtonSignUp from './../buttonSignUp/buttonSignUp';

export default class DisplayOneSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null };
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) this.fetchSeminar();
    }
    fetchSeminar() {
        if(this.props.id) {
            fetch('https://localhost:44346/api/Seminars/' + this.props.id)
                .then((response) => response.json())
                .then((json) => this.setState({ seminar: json }));
        }
    }
    render() {
        return (
            <>
                {this.state.seminar != null ? (
                    <>
                        <h1>{this.state.seminar.name}</h1>
                        <p>{this.state.seminar.description}</p>
                        <p>Speaker: {this.state.seminar.speaker.name}</p>
                        <InfoBox date={this.state.seminar.day.day} />    
                        <ButtonSignUp 
                            id={this.props.id} 
                            date={this.state.seminar.day.day} 
                            name={this.state.seminar.name} 
                        />
                    </>
                ) :
                <div id="item-container">
                    <img id="cup" src={cup} alt="cup" ></img> 
                    <p>We all need a brake in everyday life, don't we.
                    <br/>Let Your brake be a nice seminar.
                    <br/>Tea and Biscuits included.
                    </p>
                </div>}              
            </>
        )
    }
}