import React from 'react'
import cup from './../../../images/cup.svg';
import './previous.css';

export default function Previous() {
    return (
        <>
        <section>
            <div id="space">
                <div id="previous-container">
                    <img id="cup" src={cup} alt="cup" /> 
                    <p>No previous seminars yet!</p>
                </div>          
            </div> 
        </section>  
        </>
    )
}
