import React, { Component } from 'react';

import SeminarName from './seminarName/seminarName';
import SeminarDescription from './seminarDescription/seminarDescription';

export default class DisplayOneSeminar extends Component {
    render() {
        return (
            <>
                <SeminarName />
                <SeminarDescription />
            </>
        )
    }
}