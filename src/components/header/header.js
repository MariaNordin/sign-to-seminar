import React from 'react'
import HeaderItem from './headerItem/headerItem';
import './header.css';

export default function header() {
    return (
        <div className="header">
        <div id="head">
            <img className="head-item" src="./logo.svg"/>
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
