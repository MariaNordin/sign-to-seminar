import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = { name: '', email: '', seminarId: 0, userId: 0 }
    }
    saveSignUp() {
        fetch('https://localhost:44346/api/Users', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            })
        })
    }
    render() {
        return (
            <>
                Name:
                <input 
                    type = 'text'
                    value = {this.state.name}
                    onChange = {(e) => this.setState({ name: e.target.value })}
                />
                Email:
                <input
                    type = 'text'
                    value = {this.state.email}
                    onChange = {(e) => this.setState({ email: e.target.value })}
                />
                <button onClick = {() => this.saveSignUp()}>Sign Up!</button>
            </>
        );
    }
}
