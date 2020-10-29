import React, { Component } from 'react';

import DisplaySeminars from './../../upcoming/displaySeminars/displaySeminars';
import DeleteThisSeminar from './deleteThisSeminar/deleteThisSeminar';

export default class DeleteSeminar extends Component {
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
                    <div id='seminarList'>
                        <p>Click on Seminar to Delete</p>
                        <DisplaySeminars seminars={this.state.seminars} onSeminarClick={(id) => this.setState({ id: id })}/>
                    </div>
                    <div  id="delete-container">
                    {this.state.id !== undefined ? (
                        <DeleteThisSeminar id={this.state.id}/>
                        ): null}
                    </div>
                </section>
            </div>
        )
    }
}
