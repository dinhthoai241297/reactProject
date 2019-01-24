import React, { Component } from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { appTitles } from '../../constants/AppPages';

class WrapSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            title: ''
        }
    }

    componentDidMount() {
        this.changeTitle(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.location.pathname) !== JSON.stringify(nextProps.location.pathname)) {
            this.changeTitle(nextProps.location.pathname);
            this.hideSidebar();
        }
    }

    changeTitle = titlKey => {
        let title = appTitles[titlKey];
        this.setState({ title });
    }

    toggleSidebar = () => {
        $('#sidebar').toggleClass('active');
        let { sidebarOpen } = this.state;
        sidebarOpen = !sidebarOpen;
        this.setState({
            sidebarOpen
        });
    }

    hideSidebar = () => {
        let { sidebarOpen } = this.state;
        if (sidebarOpen) {
            $('#sidebar').removeClass('active');
            this.setState({ sidebarOpen: false });
        }
    }

    render() {

        let { sidebarOpen, title } = this.state;

        return (
            <div className="wrapper">
                {/* Sidebar  */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                        referPlus
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <NavLink activeClassName="active" to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/referral/new'>
                                Post a Referral
                            </NavLink>
                        </li>
                        <li>
                            <a href="#subReferral" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                Manage Referral
                            </a>
                            <ul className="collapse list-unstyled" id="subReferral">
                                <li>
                                    <NavLink activeClassName="active" to="/referral/sent">
                                        Referral Sent
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/referral/received">
                                        Referral Received
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/profile">
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/settings">
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
                {/* Page Content  */}
                <div id="content" onClick={this.hideSidebar}>
                    <Header sidebarOpen={sidebarOpen} toggleSidebar={this.toggleSidebar} title={title} />
                    {/* {this.props.children} */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default WrapSidebar;
