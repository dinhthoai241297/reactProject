import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../../actions/AppActions';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class Login extends Component {

    responseFacebook = async (response) => {
        console.log(response);
        if (!response.userID) {
            return;
        }
        // to be continued
    }

    render() {
        return (
            <div className="login">
                <div className="l-header">
                    <div className="l-logo">
                        Referplus
                    </div>
                </div>
                <div className="l-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                                <div className="row">
                                    <div className="col-12 text-center mb-4">
                                        <h3>
                                            Sign In to be rewwarded for referring your contacts
                                        </h3>
                                    </div>
                                    <div className="col-12 mb-4">
                                        By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <FacebookLogin
                                            appId={process.evn.facebookID}
                                            callback={this.responseFacebook}
                                            fields="name,email,picture,first_name"
                                            isMobile={true}
                                            disableMobileRedirect={true}
                                            redirectUri="window.location.href"
                                            render={renderProps => (
                                                <button className="c-btn-login c-btn-fb" onClick={renderProps.onClick}>
                                                    <i className="fab fa-2x fa-facebook-square"></i>
                                                    <span>
                                                        Continute with Facebook
                                                    </span>
                                                </button>
                                            )}
                                        />
                                    </div>
                                    <div className="col-12 mb-4">
                                        <button className="c-btn-login c-btn-google">
                                            <i className="fab fa-2x fa-google"></i>
                                            <span>
                                                Sign In with Google
                                            </span>
                                        </button>
                                    </div>
                                    {/*  */}
                                    {/* <div className="col-12 mb-3">
                                        <hr />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input name="email" type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <input name="password" type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-12 mb-2 text-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <button className="btn btn-primary btn-block">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                    </div>
                                    <div className="col-12 text-center mb-4">
                                        Don't have an account? <a href="#">Sing Up</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
