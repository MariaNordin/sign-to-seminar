import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', userId: 0 }
    }
    /*componentDidMount() {
        this.fetchUsers();
    }
    componentDidUpdate(prevProp) {
        if(this.props.users !== prevProp.users) this.fetchUsers();
    }
    fetchUsers() {
        fetch('https://localhost:44346/api/Users')
        .then((response) => response.json())
        .then((json) => this.setState({ users: json }));
    }*/
    saveSignUp() {
        fetch('https://localhost:44346/api/Users', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    /*catchId() {
        this.state.users.forEach(element => {
            if(element.name === this.state.name && element.email === this.state.email) {
                this.setState({ userId: element.id });
                }
        });
    }*/
    render() {
        return (
            <>
                Name:
                <input 
                    type = 'text'
                    value = {this.state.name}
                    onChange = {(e) => this.setState({ name: e.target.value })}
                />
                Email:
                <input
                    type = 'text'
                    value = {this.state.email}
                    onChange = {(e) => this.setState({ email: e.target.value })}
                />
                <button onClick = {() => this.saveSignUp()}>Sign Up!</button>
            </>
        );
    }
}
