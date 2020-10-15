import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './upcoming.css';
import './sidebar/sidebar.css';
import Sidebar from './sidebar/sidebar';
import Seminar from './seminar/seminar';
import Info from './info/info';
import ButtonSignUp from './buttonSignUp/buttonSignUp';


export default class Upcoming extends Component {
    render() {
        return (
            <>
                <section>
                    <Sidebar />    {/*klickbara "element"*/}
                    <article>
                        <Seminar /> {/*Byts ut beroende på klick i sidebar*/}
                        <Info />

                        <ButtonSignUp link='/signUp' name='Sign Up!' />
                    </article>
                </section>
            </>
        );
    }
}
