import React, { Component } from 'react';


export default class EditThisSeminar extends Component {
    constructor() {
        super();
        this.state = { 
            seminar: null, 
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
                .then((json) => this.setState({ seminar: json }));
        }
    }
    checkValues() {
        if(this.state.name === '') 
            this.setState({ name: this.state.seminar.name });
        if(this.state.description === '') 
            this.setState({ description: this.state.seminar.description });
        if(this.state.speakersName === '') 
            this.setState({ speakersName: this.state.seminar.speaker.name });
        if(this.state.date === '') 
            this.setState({ date: this.state.seminar.day.day.substring(0, 10) })
        if(this.state.time === '') 
            this.setState({ time: this.state.seminar.day.day.substring(11, 16) })
        this.updateSeminar();
    }
    updateSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.state.seminar.id, {
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
                {this.state.seminar !== null ? (
                <div key={this.state.seminar.id}>
                    <div id='title' >Edit Seminar</div>
                    <div className='SeminarInfoContainer'>
                        Title: 
                        <input
                            type='text'
                            defaultValue={this.state.seminar.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        Description: 
                        <textarea
                            type='text'
                            defaultValue={this.state.seminar.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                        Speakers name: 
                        <input
                            type='text'
                            defaultValue={this.state.seminar.speaker.name}
                            onChange={(e) => this.setState({ speakersName: e.target.value })}
                        />
                        Date: 
                        <input
                            type='text'
                            defaultValue={this.state.seminar.day.day.substring(0, 10)}
                            onChange={(e) => this.setState({ date: e.target.value })}
                        />
                        Time:
                        <input
                            type='text'
                            defaultValue={this.state.seminar.day.day.substring(11, 16)}
                            onChange={(e) => this.setState({ time: e.target.value })}
                        />
                    </div>
                    <button id='updateButton' onClick={() => this.checkValues()}>Save</button>
                    <div id="message">{this.state.message}</div>   
                </div>
                ): this.fetchSeminar() }
            </div>
        )
    }
}
