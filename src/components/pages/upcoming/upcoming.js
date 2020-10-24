import React, { Component } from 'react';


import './upcoming.css';
import './displaySeminars/displaySeminars.css';
import DisplaySeminars from './displaySeminars/displaySeminars';
import DisplayOneSeminar from './displayOneSeminar/displayOneSeminar';


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
                    </article>
                </section>
            </>
        );
    }
}
