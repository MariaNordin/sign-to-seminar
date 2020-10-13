import React from 'react';
import Home from './views/home/home';
import Upcoming from './views/upcoming/upcoming';
import Previous from './views/previous/previous';

export default function Viewer(props) {
    switch (props.toDisplay) {
        case "home":
            return (
                <main>   
                    <Home />
                </main>);
        case "upcoming":
            return (
                <main>   
                    <Upcoming />
                </main>);
        case "previous":
            return (
                <main>
                    <Previous />
                </main>
            )
        default:
            break;
    }
}