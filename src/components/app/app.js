import React from 'react';
import Header from './../header/header';
import Viewer from './../app/viewer/viewer';
import Footer from './../footer/footer';
import './app.css';

function App() {
  return (
    <>
    <Header />
    <Viewer toDisplay="signUp" />
    <Footer />
    </>
  );
}

export default App;
