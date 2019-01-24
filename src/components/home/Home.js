import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="h-header">
                    <div className="h-logo mr-2">
                        Referplus
                    </div>
                    <div >
                        <Link className="btn btn-light mr-2" to="/signup">
                            Sign Up
                        </Link>
                        <Link className="btn btn-success" to="/signin">
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="h-body">
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-12">
                                <h2>
                                    Monetize your network Build your reputation
                                </h2>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-12">
                                <h3>
                                    Referrplus is a simple to use referral management platform. Introduce your professional network and work with experts to complete tasks
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <Link to="/signin" className="btn btn-primary h-btn-go">
                                    GO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-footer">
                    <Link to="/about" className="c-a">
                        About Referplus
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
