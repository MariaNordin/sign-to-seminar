import React, { Component } from 'react';

import InfoBox from './../../../signUp/infoBox/infoBox';

export default class DeleteThisSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null, message: '' }
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) 
        this.fetchSeminar();
    }
    fetchSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.props.id)
        .then((response) => response.json())
        .then((json) => this.setState({ seminar: json }));
    }
    deleteSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.props.id, {
            method: 'DELETE',
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
            <div>
                {this.state.seminar !== null ? (
                    <div id='delete-box'>
                        <h3>Delete {this.state.seminar.name}?</h3>
                        <InfoBox date={this.state.seminar.day.day} />
                        <button id='deleteButton' onClick={() => this.deleteSeminar()}>Delete</button>
                        <div id='delete-message'>{this.state.message}</div>
                    </div>   
                ): this.fetchSeminar()}
            </div>
        )
    }
}
