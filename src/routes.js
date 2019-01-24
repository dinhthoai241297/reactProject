import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/home/Home';
import Login from './components/user/Login';
import { appPaths } from './constants/AppPages';
import NewReferral from './components/referral/NewReferral';
import WrapSidebar from './components/common/WrapSidebar';
import Sent from './components/referral/Sent';
import Page404 from './components/ErrorPage/Page404';
import Received from './components/referral/Received';
import Dashboard from './components/dif/Dashboard';
import Settings from './components/dif/Settings';
import Profile from './components/user/Profile';

export default (
    <Router >
        <App>
            <Switch>
                <Route exact path={appPaths.main} component={Home} />
                <Route path={appPaths.user.signin} component={Login} />
                <WrapSidebar>
                    <Switch>
                        <Route exact path={appPaths.referral.new} component={NewReferral} />
                        <Route path={appPaths.referral.sent} component={Sent} />
                        <Route path={appPaths.referral.received} component={Received} />
                        <Route path={appPaths.user.profile} component={Profile} />
                        <Route path={appPaths.settings} component={Settings} />
                        <Route path={appPaths.dashboard} component={Dashboard} />
                        <Route component={Page404} />
                    </Switch>
                </WrapSidebar>
            </Switch>
        </App>
    </Router>
);
