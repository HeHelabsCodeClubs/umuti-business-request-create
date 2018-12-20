import React, { Component } from 'react';
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
            recipientList,
            commentBox
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
                                {createForm}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                <a href="#" className="blue-link"
                                onClick={(e) => { e.preventDefault(); addMedecineClick() }}
                                >{addMedecineText}</a>
                                <a href="#" className="blue-link"
                                onClick={(e) => { e.preventDefault(); addCommentClick() }}
                                >{addCommentText}</a>
                                <div>{commentBox}</div>
                            </div>
                            <div className="order-subtitle">{recipientTitle}</div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                {recipientList}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset umuti-submit-btns form-component">
                                <div className="row umuti-submit-btns-wrapper">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset left-btn">
                                        <a href="#"
                                        onClick={(e) => { e.preventDefault(); submitClick() }}
                                        >
                                        <button type="submit" 
                                        className="blue-btn"
                                        disabled={submitDisableState}>
                                        {submitBtnText}
                                        </button>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset right-btn">
                                        <a href="#">
                                        <button type="cancel" 
                                        className="white-btn">
                                        Save
                                        </button>
                                        </a>
                                        <a href="#">
                                        <button type="cancel" 
                                        className="white-btn discard-btn">
                                        Discard
                                        </button>
                                        </a>
                                    </div>
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