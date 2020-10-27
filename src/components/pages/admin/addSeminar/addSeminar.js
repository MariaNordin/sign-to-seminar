import React, { Component } from 'react';

export default class AddSeminar extends Component {
    constructor() {
        super();
        this.state = { name: '', description: '', speakersName: '', date: '', time: '', message: '' };
    }
    handleInput(date, time) {
        var testStr = date + time;
        const dateTimeRegex = /\d{4}\/\d{2}\/\d{4}\:\d{2}/;
        (dateTimeRegex.test(testStr)) ? (
            this.saveSeminar()
        ):
        this.setState({ message: 'Date or Time format is incorrect'})

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
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw 'Something went wrong';
            }
        })
        .then((json) => this.setState({ message: json.message })
        );
    }
    render() { 
        return (
            <div className='AddSeminar'>
                <div id='title' >Add new Seminar</div>
                <div className='SeminarInfoContainer'>
                    Title: 
                    <input 
                        type='text' 
                        value={this.state.name} 
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    Description: 
                    <input id='desc'
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
                        placeholder='yyyy/mm/dd'
                        type='text'
                        value={this.state.date}
                        onChange={(e) => this.setState({ date: e.target.value })}
                    />
                    Time:
                    <input
                        placeholder='hh:mm'
                        type='text'
                        value={this.state.time}
                        onChange={(e) => this.setState({ time: e.target.value })}
                    />
                </div>
                <button onClick={() => this.handleInput(this.state.date, this.state.time)}>Save</button>
                <div id="message">{this.state.message}</div>
            </div>
        )
    }
}
