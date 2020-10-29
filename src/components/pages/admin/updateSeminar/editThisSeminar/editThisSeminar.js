import React, { Component } from 'react';


export default class EditThisSeminar extends Component {
    constructor() {
        super();
        this.state = { 
            id: undefined,
            name: '', 
            description: '', 
            speakersName: '', 
            date: '', 
            time: '', 
            message: ''
        }
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) 
        this.fetchSeminar();
    }
    fetchSeminar() {
        if(this.props.id) {
            fetch('https://localhost:44346/api/Seminars/' + this.props.id)
                .then((response) => response.json())
                .then((json) => this.setState( {
                    id: json.id,
                    name: json.name, 
                    description: json.description, 
                    speakersName: json.speaker.name, 
                    date: json.day.day.substring(0, 10), 
                    time: json.day.day.substring(11, 16), 
                }));
        }
    }
    updateSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.state.id, {
                method: 'PUT',
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
        });
    }
    render() {
        return (
            <div>
                {this.state.id !== undefined ? (
                <div key={this.state.id}>
                    <div id='title' >Edit Seminar</div>
                    <div className='SeminarInfoContainer'>
                        Title: 
                        <input
                            type='text'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        Description: 
                        <textarea
                            type='text'
                            defaultValue={this.state.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                        Speakers name: 
                        <input
                            type='text'
                            defaultValue={this.state.speakersName}
                            onChange={(e) => this.setState({ speakersName: e.target.value })}
                        />
                        Date: 
                        <input
                            type='text'
                            defaultValue={this.state.date}
                            onChange={(e) => this.setState({ date: e.target.value })}
                        />
                        Time:
                        <input
                            type='text'
                            defaultValue={this.state.time}
                            onChange={(e) => this.setState({ time: e.target.value })}
                        />
                    </div>
                    <button id='updateButton' onClick={() => this.updateSeminar()}>Save</button>
                    <div id="message">{this.state.message}</div>   
                </div>
                ): this.fetchSeminar() }
            </div>
        )
    }
}
