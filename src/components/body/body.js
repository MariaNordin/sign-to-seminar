import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './../pages/home/home';
import Upcoming from './../pages/upcoming/upcoming';
import Previous from './../pages/previous/previous';

export default class Body extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/upcoming'>
                        <Upcoming />
                    </Route>
                    <Route path='/previous'>
                        <Previous />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </>
        );
    }
}
