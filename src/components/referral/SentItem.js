import React, { Component } from 'react';

class SentItem extends Component {
    render() {
        return (
            <tr>
                <td className="d-flex">
                    <div className="c-date mr-2">
                        <div>
                            24
                            <br />
                            JAN
                       </div>
                    </div>
                    <div className="c-info">
                        <b>
                            JavaEngineer
                        </b>
                        <br />
                        $200
                        <br />
                        <span className="txt-expiry">
                            Expiring 28 Feb 2019
                        </span>
                    </div>
                </td>
                <td className="c-table-res">12</td>
                <td className="c-table-res">1</td>
                <td className="c-table-res">1</td>
            </tr>
        );
    }
}

export default SentItem;
