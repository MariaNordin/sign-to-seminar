import React, { Component } from 'react';

export default class SearchField extends Component {
    constructor() {
        super();
        this.state = { text: '' }
    }
    render() {
        return (
            <div id='search'>
                <input 
                    text={this.state.text} 
                    placeholder='Search'
                    onChange={e => { this.setState({ text: e.target.value });
                    this.props.handleSearchChange( e.target.value );
                    }} 
                />
                {/*<button 
                    onClick={() => this.props.handleSearchClick(this.state.text)}
                    >Search
                </button>*/}
            </div>
        )
    }
}
