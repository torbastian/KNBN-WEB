import React, {useState} from "react";
import "./Login.css";

function Login() {

    function handleSubmit() {
        Event.preventDefault();
    }

    return (
        <div id="login">
            <div className="message-container">
                <h1>Login</h1>
            </div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="••••••••"/>
                    <div className="button-group">
                        <input className="btn submit" type="submit" value="Login"/>
                        <p>or</p>
                        <input className="btn" type="button" value="Sign Up"/>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Login;