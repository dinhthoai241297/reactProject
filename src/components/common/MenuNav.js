import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuNav extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-title bg-header">
                    referplus
                </div>
                <div className="side-menu">
                    <ul>
                        <li>
                            <NavLink to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-referral'>
                                Post a Referral
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/mgt-referral'>
                                Manage Referral
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/referral-sent'>
                                Referral Sent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/referral-received'>
                                Referral Received
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/referral-received'>
                                Referral Received
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuNav;
