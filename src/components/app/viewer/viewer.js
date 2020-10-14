import React from 'react';
import Home from './views/home/home';
import Upcoming from './views/upcoming/upcoming';
import SignUp from './views/signUp/signUp';
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
        case "signUp":
            return (
                <main>
                    <SignUp />
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