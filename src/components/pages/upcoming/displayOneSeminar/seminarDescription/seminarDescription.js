import React, { Component } from 'react'

export default class SeminarDescription extends Component {
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
        if(this.props.id ) {
            fetch('https://localhost:44346/api/Seminars/' + this.props.id)
                .then((response) => response.json())
                .then((json) => this.setState({ seminar: json }));
        }
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