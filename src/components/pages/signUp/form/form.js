import React, { Component } from 'react'

import './../signUp.css';

export default class Form extends Component {
    constructor() {
        super();
        this.state = { name: '', email: '', message: ''}
    }
    handleInput(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        (emailRegex.test(email)) ? (
            this.saveSignUp()
        ):
        this.setState({ message: 'Not a valid email address.'})
    }
    saveSignUp() { 
        fetch('https://localhost:44346/api/Users', { 
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                seminarId: this.props.id,
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            else {
                if(response.status === '400') {
                    throw 'You already signed up for this seminar <3';
                }
                else {
                    throw 'You already signed up for this seminar <3';
                }
            }
        })
        .then((json) => this.setState({ message: json.message}))
        .catch((e) =>
            this.setState({ message: e, fetchStatus: 1 })
        );
    }   
    render() {
        return (
            <>
                <span>
                    <div className="form-box">
                    Name: 
                        <input 
                            type = 'text'
                            value = {this.state.name}
                            onChange = {(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="form-box">
                    Email: 
                        <input
                            type = 'text'
                            value = {this.state.email}
                            onChange = {(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                </span>  
                <button id="submit" onClick = {() => this.handleInput(this.state.email)}>Sign Up!</button>
                <div id='message'>{this.state.message}</div>              
            </>
        );
    }
}
