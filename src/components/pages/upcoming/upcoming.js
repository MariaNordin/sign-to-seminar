import React, { Component } from 'react';


import './upcoming.css';
import './../home/home.css';
import './displaySeminars/displaySeminars.css';
import DisplaySeminars from './displaySeminars/displaySeminars';
import DisplayOneSeminar from './displayOneSeminar/displayOneSeminar';


export default class Upcoming extends Component {
    constructor() {
        super();
        this.state = { seminars: [], id: undefined }
    }
    componentDidMount() {
        this.fetchSeminars();
    }
    fetchSeminars() {
        fetch('https://localhost:44346/api/Seminars')
        .then((response) => response.json())
        .then((json) => this.setState({ seminars: json }));
    }
    render() {
        return (
            <>
                <section>
                    <DisplaySeminars seminars={this.state.seminars} onSeminarClick={(id) => this.setState({ id: id })}/>
                    <article>
                        <DisplayOneSeminar id={this.state.id} />
                    </article>
                </section>
            </>
        );
    }
}
