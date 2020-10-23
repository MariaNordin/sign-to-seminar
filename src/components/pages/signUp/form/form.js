import React, { Component } from 'react'

import './../signUp.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '' }
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
        });
        /*
        .then((response) => response.json())
        .then((json) => this.setState({ message: json }));*/
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
                <button id="submit" onClick = {() => this.saveSignUp()}>Sign Up!</button>               
            </>
        );
    }
}
