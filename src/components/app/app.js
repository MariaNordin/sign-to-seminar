import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';

import Header from './../header/header';
import Logo from './../header/logo/logo';
import MenuLink from './../header/menuLink/menuLink';
import Body from './../body/body';
import Footer from './../footer/footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header>
            <Logo />
            <MenuLink link='/' name='HOME' />
            <MenuLink link='/upcoming' name='UPCOMING SEMINARS' />
            <MenuLink link='/previous' name='PREVIOUS SEMINARS' />
          </Header>
          <Body />
          <Footer />
        </Router>
      </>
    )
  }
}