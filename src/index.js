import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class UmutiBusinessRequestCreate extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { 
            loader,
            createForm,
            addMedecineClick,
            addMedecineText,
            addCommentClick,
            addCommentText,
            submitClick,
            submitDisableState,
            submitBtnText,
            createTitle,
            formTitle,
            umutiCreate,
            recipientTitle,
            recipientList
        } = this.props;

        return (
            <div className={`row reset-row create-wrapper orderWrapper ${umutiCreate}`}>
                {loader}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                    <div className="create-content shadow-box">
                        <div className="create-header">
                            <span className="create-title">{createTitle}</span>
                        </div>
                        <div className="row reset-row create-form form-container">
                            <div className="order-subtitle">{formTitle}</div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                    <div className='row'>
                                        {createForm}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                <Link to="" className="blue-link"
                                onClick={() => addPackageClick()}
                                >{addMedecineText}</Link>
                                <Link to="" className="blue-link"
                                onClick={addCommentClick}
                                >{addCommentText}</Link>
                            </div>
                            <div className="order-subtitle">{recipientTitle}</div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                {recipientList}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset umuti-submit-btns form-component">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset left-btn">
                                    <button 
                                    onClick={() => submitClick()}
                                    className="blue-btn"
                                    disabled={submitDisableState}>
                                    {submitBtnText}
                                    </button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset right-btn">
                                    <Link to="/orders">
                                    <button type="cancel" 
                                    className="white-btn">
                                    Save
                                    </button>
                                    </Link>
                                    <Link to="/orders">
                                    <button type="cancel" 
                                    className="white-btn discard-btn">
                                    Discard
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default UmutiBusinessRequestCreate;