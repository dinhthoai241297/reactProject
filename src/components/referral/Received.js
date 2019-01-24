import React, { Component, Fragment } from 'react';
import ReceivedItem from './ReceivedItem';

class Received extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="c-table">
                                <thead>
                                    <tr>
                                        <th className="c-table-res" scope="col" width="8%"></th>
                                        <th className="c-table-res" scope="col" width="8%"></th>
                                        <th>Date created</th>
                                        <th className="c-table-res" scope="col" width="15%">From</th>
                                        <th className="c-table-res" scope="col" width="15%">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ReceivedItem />
                                    <ReceivedItem />
                                    <ReceivedItem />
                                    <ReceivedItem />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Received;
