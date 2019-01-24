import React, { Component, Fragment } from 'react';
import SentItem from './SentItem';

class Sent extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="c-table">
                                <thead>
                                    <tr>
                                        <th>Date created</th>
                                        <th className="c-table-res" scope="col" width="10%">Views</th>
                                        <th className="c-table-res" scope="col" width="10%">Accepted</th>
                                        <th className="c-table-res" scope="col" width="10%">Rejected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <SentItem />
                                    <SentItem />
                                    <SentItem />
                                    <SentItem />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Sent;
