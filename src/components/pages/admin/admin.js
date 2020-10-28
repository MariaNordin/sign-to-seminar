import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import UpdateSeminar from './updateSeminar/updateSeminar';
import AddSeminar from './addSeminar/addSeminar';
import './admin.css';

export default class Admin extends Component {
    render() {
        const Modal = () => (
            <>
                <Popup trigger={<button>Add new seminar</button>} modal>
                        <AddSeminar />
                </Popup>
                <Popup trigger={<button>Edit seminar</button>} modal>
                    <UpdateSeminar />
                </Popup>
            </>
        );
        return (
            <>
                <div id='modal'>
                    <Modal />
                </div>
            </>
        )
    }
}
