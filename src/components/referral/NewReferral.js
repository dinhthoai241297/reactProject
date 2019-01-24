import React, { Component, Fragment } from 'react';
import WrapSidebar from '../common/WrapSidebar';

class NewReferral extends Component {

    componentDidMount() {
        $('#expiryDate').datepicker({
            format: "mm/dd/yyyy",
            autoclose: true,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <div className="row mb-2">
                                <div className="col-12">
                                    Please fill up the summary for the recipient.
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Job title"
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Expiry date" id="expiryDate" readOnly
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Referral Free (e.g $100)"
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">Private Contract</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12">
                                    Please fill up more details. The recipient can see these details for more information on what you are looking for.
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12">
                                    <textarea className="form-control" placeholder="Job description"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Industry"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Jbb Function"
                                    />
                                </div>
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Seniority (no.yrs)"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Employment Type"
                                    />
                                </div>
                                <div className="col-6 mb-2">
                                    <input
                                        type="text" className="form-control"
                                        placeholder="Attached Your Own T&Cs"
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 text-right">
                                    <button className="btn btn-success btn-sm">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewReferral;
