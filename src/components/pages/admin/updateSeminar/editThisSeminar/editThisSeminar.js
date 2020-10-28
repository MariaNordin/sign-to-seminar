import React, { Component } from 'react';


export default class EditThisSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null, name: '', description: '', speakersName: '', date: '', time: '' }
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
    handleDateTime(date, time) {
        var testStr = date + time;
        const dateTimeRegex = /\d{4}\/\d{2}\/\d{4}\:\d{2}/;
        (dateTimeRegex.test(testStr)) ? (
            this.updateSeminar()
        ):
        this.setState({ message: 'Date or Time format is incorrect'})
        }
    updateSeminar() {
        
    }
    render() {
        return (
            <div id='edit-container'>
                {this.state.seminar !== null ? (
                <div key={this.state.seminar.id}>
                    <div id='title' >Edit Seminar</div>
                    <div className='SeminarInfoContainer'>
                        Title: 
                        <input
                            type='text'
                            value={this.state.seminar.name}
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
                    <button onClick={() => this.handleDateTime(this.state.date, this.state.time)}>Save</button>
                    <div id="message">{this.state.message}</div>   
                </div>
                ): this.fetchSeminar() }
            </div>
        )
    }
}
