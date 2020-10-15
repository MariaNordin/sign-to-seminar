import React from 'react';
import cup from '../../../images/cup.svg';
import './signUp.css';

export default function SignUp() {
    return (
        <>
            <section id="form-section">
                <div id="info-container">

                    <h2>Sign up for British Humour!</h2> 
                    <p>Date: January 2020
                    <br/>Time: 5pm
                    <br/>Place: Street City
                    </p>
                    <img src={cup} alt="cup" />
                </div> 

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
            </section>            
        </>
    )
}
