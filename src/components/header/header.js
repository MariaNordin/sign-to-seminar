import React from 'react'
import logo from './../../images/logo.svg';
import HeaderItem from './headerItem/headerItem';
import './header.css';

export default function Header() {
    return (
        <div className="header">
        <div id="head">
            <img className="head-item" src={logo} alt="logo" />
            <h2 className="head-item">Sign To Seminar</h2>
        </div>
        <div id="menu">
            <ul>
                <HeaderItem text="HOME" url=""/>
                <HeaderItem text="UPCOMING SEMINARS" url=""/>
                <HeaderItem text="PREVIOUS SEMINARS" url=""/>
            </ul>
        </div> 
    </div>  
    )
}
