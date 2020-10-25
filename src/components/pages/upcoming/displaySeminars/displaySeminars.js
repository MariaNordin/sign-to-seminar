import React, { Component } from 'react';

import SearchField from './searchField/searchField';

export default class DisplaySeminars extends Component {
    constructor() {
        super();
        this.state = { filteredSeminars: [] };
    }
    componentDidMount() {
        this.fetchSeminars();
    }
    fetchSeminars() {
        fetch('https://localhost:44346/api/Seminars')
        .then((response) => response.json())
        .then((json) => this.setState({ filteredSeminars: json }));
    }
    filter(filterText) {
        var outData = [];
        this.props.seminars.forEach(item => {
            if(this.compareSearchTextWithObject(item, filterText))
            outData.push(item);
        });
        this.setState({ filteredSeminars: outData })
    }
    compareSearchTextWithObject(item, filterText) {
        return (
            item.name.toLowerCase().search(filterText.toLowerCase()) >= 0 || 
            item.description.toLowerCase().search(filterText.toLowerCase()) >= 0
            );
    }
    handleClickEvent(id) {
        this.props.onSeminarClick(id);
    }
    render() {
        return (
            <nav>
                <SearchField
                    handleSearchChange={(text) => this.filter(text) } 
                />
                <ul>
                    {this.state.filteredSeminars.map((item) => 
                        (<li key={item.id} onClick={() => this.handleClickEvent(item.id)}>{(item.name) + ' ' + 
                            (item.day.day.substring(5, 7)) + '/' + (item.day.day.substring(8, 10))}</li>
                    ))}
                </ul>
            </nav>
        )
    }
}