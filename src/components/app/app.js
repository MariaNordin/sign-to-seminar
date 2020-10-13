import React from 'react';
import logo from './../../images/logo.svg';
import Header from './../header/header';
import './app.css';

function App() {
  return (
    <>
    <Header />

    <div className="content">
        <section>
            <div id="space">
                <div id="item-container">
                    <img id="cup" src="../pics/cup.svg"/> 
                    <p>We all need a brake in everyday life, don't we.
                        <br/>Let Your brake be a nice seminar.
                        <br/>Tea and Biscuits included.
                    </p>
                </div>          
            </div> 
        </section>            
        
        <div className="footer">
            <p>SIGN TO SEMINAR 2.4 © NordBack Studios 2020</p>
        </div>
    </div>
    </>
  );
}

export default App;
