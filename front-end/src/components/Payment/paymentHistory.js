import React, { Component } from 'react';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/User/authAction';
import { getPaymentHistory } from '../../actions/User/getPost';

class paymentHistory extends Component {
    componentDidMount() {
        this.props.getPaymentHistory(localStorage.getItem('publicKey'));
        this.props.getCurrentUser();
    }
    render() {
        const { post, loading, profile } = this.props.post;
        console.log(post)
        // console.log(profile);
        let postItems;
        if (post === null || loading) {
            postItems = <Spinner />
        } else {
            if (post.length > 0) {
                postItems = (post.map((item, index) => {
                    return (
                        <div className="post-content" key={index}>
                            <div data-toggle="modal" >
                                <div className="post-container " >
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <p className="text-muted">{item.time}</p>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>{item.text} <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        }
        return (
            <div>

                <div className="col-md-8 " >
                {postItems}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        post: state.postReducer,
    }
}

export default connect(mapStateToProps,{getCurrentUser, getPaymentHistory}) (paymentHistory);