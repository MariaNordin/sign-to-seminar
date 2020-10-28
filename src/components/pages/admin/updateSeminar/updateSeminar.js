import React, { Component } from 'react'; 

import DisplaySeminars from './../../upcoming/displaySeminars/displaySeminars';
import './../../upcoming/displaySeminars/displaySeminars.css';
import EditThisSeminar from './editThisSeminar/editThisSeminar';

export default class UpdateSeminar extends Component {
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
        .then((json) => this.setState({ seminars: json }))
    }
    render() {
        return (
            <div id='update'>
                <section>
                    <DisplaySeminars seminars={this.state.seminars} onSeminarClick={(id) => this.setState({ id: id })}/>
                    <EditThisSeminar id={this.state.id} />
                </section>
            </div>
        )
    }
}
