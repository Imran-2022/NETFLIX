import React from 'react';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import "./Sign.css"
const SignIn = () => {
    return (
        <form className="w-25 cl m-auto">
            <h5>
                <p><Link to="/home">Home</Link> /<Link to="/sign-in">signIn</Link> </p>

            </h5>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label mb-2" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign-In</button>
            <p className="forgot-password text-right ">
                Forgot <a href="#!" onClick={() => alert("forget password not working for now.try later. ")}>password?</a>
            </p>
            <li class="list-inline-item pt-4 mt-4">
                <p><FaGoogle /> Sign in with Google</p>
                <p><FaFacebookSquare /> Sign in with facebook</p>
                <p><GoMarkGithub /> Sign in with Github</p>
            </li>
            <p>New there ? sign up first  <Link to="/sign-up">Sign Up</Link> </p>

        </form>
    );
};

export default SignIn;