import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
    render() {
        return(
            <div className="signup-block">
                <h2 className="signup">Delivering fresh food and fresh starts.
                </h2>
                <div className="signup-form">
                    <div className="form-group">
                        <div className="food-bank">
                            <label htmlFor="food-bank" className="food-bank-label">
                                Which food bank are you?
                            </label>
                            <input type="text" name="food-bank" placeholder="Food Bank of BC">
                            </input>
                        </div>
                        <div className="email">
                            <label htmlFor="email" className="email-label">
                                Email address
                            </label>
                            <input type="text" name="email" placeholder="admin@foodbankofbc">
                            </input>
                        </div>
                        <div className="password">
                            <label htmlFor="password" className="password-label">
                                Password
                            </label>
                            <input type="password" name="password" placeholder="Password">
                            </input>
                        </div>

                        <div className="signup-footer">
                            <button type="button" className="signup-btn">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;