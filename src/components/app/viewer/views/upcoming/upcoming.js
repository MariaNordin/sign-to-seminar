import React from 'react';
import './upcoming.css';
import './sidebar/sidebar.css';
import Sidebar from './sidebar/sidebar';
import Seminar from './seminar/seminar';
import Info from './info/info';

export default function Upcoming() {
    return (
        <>
            <section>
                <Sidebar />    
                <article>
                    <Seminar />
                    <Info />

                    <div id="sign-up">
                        <p>Wan't to participate in this seminar?</p>
                        <button href="signUp.html">Sign Up!</button>
                    </div>            
                </article>
            </section>
        </>
    )
}
