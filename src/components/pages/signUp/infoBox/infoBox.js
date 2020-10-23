import React, { Component } from 'react';

export default class InfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = { seminar: null }
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) this.fetchSeminar();
    }
    fetchSeminar() {
        fetch('https://localhost:44346/api/Seminars/' + this.props.id)
        .then((response) => response.json())
        .then((json) => this.setState({ seminar: json }));
    }
    render() {
        return (
            <> 
                {this.state.seminar != null ? (
                <p>Date: {this.state.seminar.day.day}
                <br/>Time: 
                </p>
                ) : null}
            </>
        )
    }
}
