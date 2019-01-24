import React, { Component, Fragment } from 'react';
import Loading from './common/Loading';

class App extends Component {

    render() {
        return (
            <Fragment>
                {this.props.children}
                <Loading />
            </Fragment>
        );
    }
}

export default App;
