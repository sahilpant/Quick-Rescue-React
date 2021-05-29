import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div className="text" 
            style={{
                position:"absolute",
                top:"20%",
                backgroundColor:"#dee",
                padding:"10px",
                borderRadius:"5",
                height:"70vh",
                width:"100vh",
                marginLeft:"25%"

            }}>
            <form>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <br/>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <br/>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <br/>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <br/><br/><br/><p className="forgot-password text-right">
                    Already registered <Link to="/Login">sign in?</Link>
                </p>
            </form>
            </div>
        );
    }
}