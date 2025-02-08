import React from 'react';
import '../App.css'; 

const SignUp = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                {/* Password input */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                {/* 2 column grid layout for inline styling */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* Submit button */}
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* Register buttons */}
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
            <div className="col-sm-6 px-0 d-none d-sm-block">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" height="300" width="300" alt="Login" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} /> */}
            </div>
        </div>
    );
};

export default SignUp;
