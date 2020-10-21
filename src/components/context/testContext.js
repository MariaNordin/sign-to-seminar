import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext();

export default class TestContext extends Component {
    constructor() {
        super();
        this.state = { seminars: [] }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
