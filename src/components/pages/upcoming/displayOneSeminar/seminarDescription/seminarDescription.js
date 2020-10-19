import React, { Component } from 'react'

export default class SeminarDescription extends Component {
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
                    (<p>{this.state.seminar.description}</p>)
                    : null} 
                
            </>
        )
    }
}