import React from 'react';

import InfoBox from './infoBox/infoBox';
import Form from './form/form';
import './signUp.css';

export default function SignUp() {
    return (
        <>
            <section id="form-section">   
                <InfoBox />
                <Form />
            </section>            
        </>
    );
}
