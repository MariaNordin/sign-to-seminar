import React, { Component } from 'react';

export default class AddSeminar extends Component {
    constructor() {
        super();
        this.state = { name: '', description: '', speakersName: '', date: '', time: '' };
    }
    saveSeminar() {
        fetch('https://localhost:44346/api/Seminars/', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                SpeakersName: this.state.speakersName,
                Date: this.state.date,
                Time: this.state.time
            }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    render() {
        return (
            <div>
                Title: 
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
                Speakers name: 
                <input
                    type='text'
                    value={this.state.speakersName}
                    onChange={(e) => this.setState({ speakersName: e.target.value })}
                />
                Date: 
                <input 
                    type='string'
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                />
                Time:
                <input
                    type='string'
                    value={this.state.time}
                    onChange={(e) => this.setState({ time: e.target.value })}
                />
                <button onClick={() => this.saveSeminar()}>Save</button>
            </div>
        )
    }
}
