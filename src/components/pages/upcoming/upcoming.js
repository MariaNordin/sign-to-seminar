import React, { Component } from 'react';


import './upcoming.css';
import './displaySeminars/displaySeminars.css';
import DisplaySeminars from './displaySeminars/displaySeminars';
import DisplayOneSeminar from './displayOneSeminar/displayOneSeminar';
import Info from './info/info';
import ButtonSignUp from './buttonSignUp/buttonSignUp';


export default class Upcoming extends Component {
    constructor() {
        super();
        this.state = { id: undefined }
    }
    render() {
        return (
            <>
                <section>
                    <DisplaySeminars onSeminarClick={(id) => this.setState({ id: id })}/>
                    <article>
                        <DisplayOneSeminar id={this.state.id}/>
                        <Info />    {/*Byts ut beroende på vilket seminar som visas */}
                        <ButtonSignUp /> {/*Pop-up ska layoutas och Html-form ska bytas ut...*/}
                    </article>
                </section>
            </>
        );
    }
}
