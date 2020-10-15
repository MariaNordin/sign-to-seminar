import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MenuLink extends Component {
    render() {
        return (
            <Link to={this.props.link}>{this.props.name}</Link>
        );
    }
}

//import React from 'react'

//export default function MenuLink(props) {
//    return (
//        <li>
//            <a href="">{props.name}</a>
//        </li>
//    )
//}
