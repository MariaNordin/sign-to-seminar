import React from 'react';

import DisplaySeminars from './../upcoming/displaySeminars/displaySeminars';
import cup from './../../../images/cup.svg';
import './home.css';

export default function Home() {
    return (
        <>
            <section>
                <DisplaySeminars onSeminarClick={(id) => this.setState({ id: id })}/>
                <div id="space">
                    <div id="item-container">
                        <img id="cup" src={cup} alt="cup" ></img> 
                        <p>We all need a brake in everyday life, don't we.
                            <br/>Let Your brake be a nice seminar.
                            <br/>Tea and Biscuits included.
                        </p>
                    </div>          
                </div> 
            </section>
        </>
    )
}
