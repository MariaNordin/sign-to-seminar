import React, { Component } from 'react'

export default class DisplayOneSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null };
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) this.fetchSeminar();
    }
    fetchSeminar() {
        if(this.props.id) {
            fetch('https://localhost:44346/api/Seminars/' + this.props.id)
                .then((response) => response.json())
                .then((json) => this.setState({ seminar: json }));
        }
    }
    render() {
        return (
            <>
                {this.state.seminar != null ? (
                    <>
                        <h1>{this.state.seminar.name}</h1>
                        <p>{this.state.seminar.description}</p>
                        <p>Speaker: {this.state.seminar.speaker.name}</p>
                    </>
                ) : null}              
            </>
        )
    }
}