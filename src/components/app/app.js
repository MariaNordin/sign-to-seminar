import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';

import Header from './../header/header';
import MenuLink from './../header/menuLink/menuLink';
import Body from './../body/body';
import Footer from './../footer/footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header>
            <MenuLink link='/' name='HOME' />
            <MenuLink link='/upcoming' name='UPCOMING SEMINARS' />
            <MenuLink link='/previous' name='PREVIOUS SEMINARS' />
            <MenuLink link='/admin' name='ADMIN' />
          </Header>
          <Body />
          <Footer />
        </Router>
      </>
    )
  }
}