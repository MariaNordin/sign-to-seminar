import React from 'react';
import logo from './../../images/logo.svg';
import Header from './../header/header';
import Viewer from './../app/viewer/viewer';
import './app.css';

function App() {
  return (
    <>
    <Header />
    <Viewer toDisplay="upcoming" />
    
        
        <div className="footer">
            <p>SIGN TO SEMINAR 2.4 © NordBack Studios 2020</p>
        </div>
    </>
  );
}

export default App;
