import React, { Component } from 'react'

export default class DisplaySeminars extends Component {
    constructor() {
        super();
        this.state = { seminars: [] }
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
                <ul>
                    {this.state.seminars.map((item) => 
                        (<li key={item.id} onClick={() => this.handleClickEvent(item.id)}>{item.name}</li>
                    ))}
                </ul>
            </nav>
        )
    }
}