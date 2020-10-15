import React, { Component } from 'react';
import './header.css';

import Logo from './../header/logo/logo';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Logo />

                <div id="menu">
                    <ul>    
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}
