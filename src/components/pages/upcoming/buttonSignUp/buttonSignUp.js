import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './buttonSignUp.css';

import SignUp from './../../signUp/signUp';

export default class ButtonSignUp extends Component {
    constructor() {
        super();
        this.state = { show: false }
    }
    render() {
        const Modal = () => (
            <Popup trigger={<button>Sign Up!</button>} modal>
                    <SignUp id={ this.props.id} />
            </Popup>
        );
        return (
            <div id="sign-up">
                <Modal />
            </div>            
        );
    }
}
