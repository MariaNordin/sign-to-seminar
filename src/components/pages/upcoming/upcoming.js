import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './upcoming.css';
import './sidebar/sidebar.css';
import Sidebar from './sidebar/sidebar';
import Seminar from './seminar/seminar';
import Info from './info/info';
import SignUp from '../signUp/signUp';


export default class Upcoming extends Component {
    render() {
        return (
            <>
                <section>
                    <Sidebar />    {/*klickbara "element"*/}
                    <article>
                        <Seminar /> {/*Byts ut beroende på klick i sidebar*/}
                        <Info />

                        
                        <Popup trigger={<button>Sign Up!</button>}>
                            <SignUp />
                        </Popup>
                        {/*<ButtonSignUp link='/signUp' name='Sign Up!' />*/}
                    </article>
                </section>
            </>
        );
    }
}
