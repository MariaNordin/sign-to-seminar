import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './buttonSignUp.css';

import SignUp from './../../signUp/signUp';

export default class ButtonSignUp extends Component {
    render() {
        const Modal = () => (
            <Popup trigger={<button>Sign Up!</button>} modal>
                    <SignUp id={this.props.id} date={this.props.date} name={this.props.name} />
            </Popup>
        );
        return (
            <div id="sign-up">
                <Modal id={this.props.id} date={this.props.date} name={this.props.name} />
            </div>            
        );
    }
}
