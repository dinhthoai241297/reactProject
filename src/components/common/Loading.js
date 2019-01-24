import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Loading extends Component {
    render() {

        let { loading } = this.props;
        if (!loading) {
            return null;
        }

        return (
            <div id="loading">
                <i className="fas fa-3x fa-spin fa-spinner"></i>
            </div>
        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        loading: state.AppReducer.loading
    }
}

export default connect(mapStateToProps)(Loading);
