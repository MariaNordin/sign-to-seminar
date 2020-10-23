import React, { Component } from 'react';


import './upcoming.css';
import './displaySeminars/displaySeminars.css';
import DisplaySeminars from './displaySeminars/displaySeminars';
import DisplayOneSeminar from './displayOneSeminar/displayOneSeminar';
import InfoBox from './../signUp/infoBox/infoBox';
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
                        <DisplayOneSeminar id={this.state.id} />
                        <InfoBox id={this.state.id} />    {/*Byts ut beroende på vilket seminar som visas */}
                        <ButtonSignUp id={this.state.id} /> {/*Pop-up ska layoutas och Html-form ska bytas ut...*/}
                    </article>
                </section>
            </>
        );
    }
}
