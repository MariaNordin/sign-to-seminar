import React, { Component } from 'react'

export default class SeminarName extends Component {
    constructor() {
        super();
        this.state = { seminar: null };
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    fetchSeminar() {
        fetch('https://localhost:44346/api/Seminars/15')
            .then((response) => response.json())
            .then((json) => this.setState({ seminar: json }));
    }
    render() {
        return (
            <>
                {this.state.seminar != null ? 
                    (<h1>{this.state.seminar.name}</h1>)
                    : null} 
                
            </>
        )
    }
}