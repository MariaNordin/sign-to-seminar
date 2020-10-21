import React, { Component } from 'react';

export default class AddSeminar extends Component {
    constructor() {
        super();
        this.state = { name: '', description: '', seminarOfSpeakerId: 0 };
    }
    saveSeminar() {
        fetch('https://localhost:44346/api/Seminars/', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                seminarOfSpeakerId: this.state.id,
            }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    render() {
        return (
            <div>
                Name: 
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                Description: 
                <input
                    type='text'
                    value={this.state.description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                />
                Speaker id: 
                <input
                    type='number'
                    value={this.state.seminarOfSpeakerId}
                    onChange={(e) => this.setState({ seminarOfSpeakerId: e.target.value })}
                />
                <button onClick={() => this.saveSeminar()}>Save</button>
            </div>
        )
    }
}
