import React, { Component } from 'react';

import SearchField from './searchField/searchField';
//import './displaySeminars.css';

export default class DisplaySeminars extends Component {
    constructor() {
        super();
        this.state = { seminars: [], searchString: '' }
    }
    componentDidMount() {
        this.fetchSeminars();
    }
    fetchSeminars() {
        fetch('https://localhost:44346/api/Seminars')
        .then((response) => response.json())
        .then((json) => this.setState({ seminars: json }));
    }
    handleClickEvent(id) {
        this.props.onSeminarClick(id);
    }
    render() {
        return (
            <nav>
                <SearchField
                    handleSearchClick={(text) => this.setState({ searchString: text })} 
                />
                <ul>
                    {this.state.seminars.map((item) => 
                        (<li key={item.id} onClick={() => this.handleClickEvent(item.id)}>{(item.name) + ' ' +  {/* extremt ful lösning*/}
                            (item.day.day.substring(5, 7)) + '/' + (item.day.day.substring(8, 10))}</li>
                    ))}
                </ul>
            </nav>
        )
    }
}