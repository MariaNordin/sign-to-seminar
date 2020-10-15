import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ButtonSignUp extends Component {
    render() {
        return (
            <div id="sign-up">
                <p>Wan't to participate in this seminar?</p>
                <Link to={this.props.link}>{this.props.name}</Link>
            </div>            
        )
    }
}
