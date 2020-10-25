import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Upcoming from './../pages/upcoming/upcoming';
import Previous from './../pages/previous/previous';
import Admin from './../pages/admin/admin';

export default class Body extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/previous'>
                        <Previous />
                    </Route>
                    <Route path='/admin'>
                        <Admin />
                    </Route>
                    <Route path='/'>
                        <Upcoming />
                    </Route>
                </Switch>
            </>
        );
    }
}
