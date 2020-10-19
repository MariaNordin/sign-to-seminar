import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './buttonSignUp.css';

import SignUp from './../../signUp/signUp';

export default class ButtonSignUp extends Component {
    render() {
        return (
            <div id="sign-up">
                <Popup trigger={<button>Sign Up!</button>}>
                    <SignUp />
                </Popup>
            </div>            
        );
    }
}
