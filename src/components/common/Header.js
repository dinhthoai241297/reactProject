import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="m-header bg-header mb-3">
                <div className="m-toggle-menu" onClick={this.props.toggleSidebar}>
                    <i className="fas fa-2x fa-bars"></i>
                </div>
                <div className="m-title">
                    <h4>
                        {this.props.title}
                    </h4>
                </div>
            </div>
        );
    }
}

export default Header;
