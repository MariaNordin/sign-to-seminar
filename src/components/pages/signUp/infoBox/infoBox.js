import React, { Component } from 'react';

export default class InfoBox extends Component {
    render() {
        return (
            <>
                <p>Date: {this.props.date.substring(0, 10)}
                <br/>Time: {this.props.date.substring(11, 16)}
                </p>
            </>
        )
    }
}
