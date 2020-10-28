import React, { Component } from 'react'

export default class EditThisSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null, name: '', description: '', speakersName: '', date: '', time: '', message: '' }
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id != prevProp.id)
            this.fetchSeminar();
    }
    fetchSeminar() {
        if(this.props.id) {
            fetch('https://localhost:44346/api/Seminars/' + this.props.id )
            .then((response) => response.json())
            .then((json) => this.setState({ seminar: json }));
        }
    }
    render() {
        return (
            <div>
               <div id='title' >Edit Seminar</div>
                <div className='SeminarInfoContainer'>
                    Title: 
                    <input 
                        type='text'
                        value='hej'
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
