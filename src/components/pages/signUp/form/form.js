import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form>
                    <div id="form-box">
                        <label htmlFor="fname">First name:</label><br/>
                        <input type="text" id="fname" name="fname"></input><br/>
                    </div>
                    <div id="form-box">
                        <label htmlFor="lname">Last name:</label><br/>
                        <input type="text" id="lname" name="lname"></input><br/>
                    </div>
                    <div id="form-box">
                        <label htmlFor ="email">Email:</label><br/>
                        <input type="email" id="email" name="email"></input><br/>
                    </div>
                    <div id="submit">
                        <input type="submit" value="Sign Up"></input>
                    </div>  
                </form>
        );
    }
}
