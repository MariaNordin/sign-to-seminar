import React, { Component } from 'react';
import Popup from  'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import UpdateSeminar from './updateSeminar/updateSeminar';
import AddSeminar from './addSeminar/addSeminar';
import './../upcoming/displaySeminars/displaySeminars.css';
import './admin.css';

export default class Admin extends Component {
    render() {
        const Modal = () => (
            <div>
                <Popup trigger={<button className='adminButtons'>Add new seminar</button>} modal>
                    <AddSeminar />
                </Popup>
                <Popup trigger={<button className='adminButtons'>Edit seminar</button>} modal>
                    <UpdateSeminar />
                </Popup>
            </div>    
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
