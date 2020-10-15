import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MenuLink extends Component {
    render() {
        return (

            <div id="menu">
                <ul>
                    <li>
                        <Link to={this.props.link}>{this.props.name}</Link>
                    </li>
                </ul>
            </div>
            /*<li>
                <span onClick={() => this.props.onClick(this.props.name)}>
                    {this.props.name}
                </span>;
            </li>*/
        );
    }
}
//Här ska jag länka till rätt sida ?


//import React from 'react'

//export default function MenuLink(props) {
//    return (
//        <li>
//            <a href="">{props.name}</a>
//        </li>
//    )
//}
