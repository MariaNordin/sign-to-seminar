import React, { Component } from 'react';

import AddSeminar from './addSeminar/addSeminar';

export default class Admin extends Component {
    constructor() {
        super();
        this.state = { seminars: [] };
    }
    render() {
        return (
            <div>
                <AddSeminar />
            </div>
        )
    }
}
