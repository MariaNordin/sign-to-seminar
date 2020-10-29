import React, { Component } from 'react';

import InfoBox from './../../../signUp/infoBox/infoBox';
import cup from './../../../../../images/cup.svg';

export default class DeleteThisSeminar extends Component {
    constructor() {
        super();
        this.state = { seminar: null }
    }
    componentDidMount() {
        this.fetchSeminar();
    }
    componentDidUpdate(prevProp) {
        if(this.props.id !== prevProp.id) 
        this.fetchSeminar();
    }
    fetchSeminar() {
        fetch(fetch('https://localhost:44346/api/Seminars/' + this.props.id)
        .then((response) => response.json())
        .then((json) => this.setState({ seminar: json })))
    }
    render() {
        return (
            <div>
                {this.state.seminar !== null ? (
                    <div>
                            <h3>Delete {this.state.seminar.name}?</h3>
                            <InfoBox date={this.state.seminar.day.day} />
                            <img src={cup} alt="cup" />
                    </div>   
                ): this.fetchSeminar()}
            </div>
        )
    }
}
