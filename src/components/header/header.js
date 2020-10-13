import React from 'react'

export default function header() {
    return (
        <div className="header">
        <div id="head">
            <img className="head-item" src="./logo.svg"/>
            <h2 className="head-item">Sign To Seminar</h2>
        </div>
        <div id="menu">
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    <a href="upcoming.html">UPCOMING SEMINARS</a>
                </li>
                <li>
                    <a href="previous.html">PREVIOUS SEMINARS</a>
                </li>
            </ul>
        </div> 
    </div>  
    )
}
