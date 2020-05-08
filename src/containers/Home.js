import React from 'react';
import './Home.css';
import {LinkContainer} from "react-router-bootstrap";

//home page
export default function Home(props) {

    function unAuthPage() {
        return (
            <div className="main-content-headerHome">
                <h1>WELCOME TO <span className="colorchange">RAMBLERFY!</span><br />
                    WHERE YOU FIND THE BEST JAMS </h1>
                <div className="login">
                    <h2>
                        <a href="/login">Login</a> or
                        <a href="/signup">Signup </a>
                        to start jamming!
                    </h2>
                </div>
            </div>
        )
    }

    function AuthPage() {
        return (
            <div className="main-content-headerHome">
                <h1>WELCOME TO <span className="colorchange">RAMBLERFY!</span><br />
                    WHERE YOU FIND THE BEST JAMS </h1>
                <LinkContainer to="/searchpage">
                    <a href="#" className="btn btn-one">CLICK TO SEARCH FOR JAMS</a>
                </LinkContainer>
            </div>
        )
    }

    return (
        <div className="Home">
            {props.isAuth === false ? unAuthPage() : AuthPage()}
        </div>
    );

}