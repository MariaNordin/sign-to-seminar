import React, { Component } from 'react';

import AddSeminar from './addSeminar/addSeminar';
import './admin.css';

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
