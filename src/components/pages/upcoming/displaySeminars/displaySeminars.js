import React, { Component } from 'react';

import SearchField from './searchField/searchField';

export default class DisplaySeminars extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredSeminars: props.seminars };
    }
    componentDidUpdate(prevProp) {
        if(this.props.seminars != prevProp.seminars) {
            this.setState({ filteredSeminars: this.props.seminars });
        }
    }
    filterOnText(filterText) {
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
                    handleSearchChange={(text) => this.filterOnText(text) } 
                />
                <ul>                    
                    {this.state.filteredSeminars.map((item) => 
                        (<li key={item.id} onClick={() => this.handleClickEvent(item.id)}>{(item.name)}
                            <p>{item.description.split(/\s+/).slice(0,6).join(' ') + '...'}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}