import React, { Component } from 'react';

class ReceivedItem extends Component {
    render() {
        return (
            <tr>
                <td className="c-table-res">
                    <input type="checkbox" />
                </td>
                <td className="c-table-res">
                    <i className="far fa-2x fa-star"></i>
                </td>
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
                <td className="c-table-res">Jimmy</td>
                <td className="c-table-res">Accepted</td>
            </tr>
        );
    }
}

export default ReceivedItem;
