import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost, getOwnerPost } from '../../actions/User/getPost';
import SimpleCrypto from "simple-crypto-js";
import Spinner from '../common/Spinner';
import { postAction } from '../../actions/User/postAction';
import { getCurrentUser } from '../../actions/User/authAction';
import {sendComment} from '../../actions/Comment/sendComment';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                type: '1',
                text: ''
            },
            comment:'',
            hash:'',
        }
    }
    componentDidMount() {
        this.props.getPost(localStorage.getItem('publicKey'));
        this.props.getOwnerPost(localStorage.getItem('publicKey'));
        this.props.getCurrentUser();
    }
    onHandleChange = (event) => {
        this.setState({
            content: { text: event.target.value }
        })
    }
    onCommentChange= (event,test)=>{
       
        this.setState({
            comment: event,
          
            
        })
    }
    onSubmitComment= (hash,event)=>{
        event.preventDefault();
        this.props.sendComment({
            type: 1,
            text: this.state.comment,
            hash,
            privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
            sequence: this.props.auth.user.sequence
        });
     
        

    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        const simpleCrypto = new SimpleCrypto(sessionStorage.getItem('keyDecrypt'));
        const privatekey = simpleCrypto.decrypt(sessionStorage.getItem('privateKeyEncrypt'));
        this.props.postAction({
            type: 1,
            text: this.state.content.text,
            keys: [],
            privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
            sequence: this.props.auth.user.sequence
        }, this.props.history);
    }

    render() {
        const { post, loading, profile } = this.props.post;
        // console.log(profile);
        let postItems;
        if (post === null || loading) {
            postItems = <Spinner />
        } else {
            if (post.length > 0 && profile !== null) {

                postItems = (post.map((item, index) => {
                    return (
                        <div className="post-content" key={index}>
                            <div data-toggle="modal" data-target={"#" + item._id}>
                                {/* <img src={item.cover} alt="post-image" className="img-responsive post-image" /> */}
                                <div className="post-container " >
                                    <img src={"data:image/jpeg;base64," + profile.user.avatar} alt="user" className="profile-photo-md pull-left" />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5><a href="timeline.html" className="profile-link">{profile.user.name + " "}</a> </h5>
                                            <p className="text-muted">{item.time}</p>
                                        </div>
                                        {/* <div className="reaction">
                                    <p className="btn text-green"><i className="icon ion-thumbsup"></i> {item.like}</p>
                                    <p className="btn text-red"><i className="fa fa-thumbs-down"></i>{item.dislike}</p>
                                </div> */}
                                        <div className="reaction">
                                            <button className="btn text-green"><i className="icon ion-thumbsup"></i></button>
                                            <button className="btn text-red"><i className="fa fa-thumbs-down"></i></button>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>{item.text} <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>
                                        <div className="line-divider"></div>
                                        {/* {item.comments.map((comment, index) => {
                                return (
                                    <div className="post-comment" key={index}>
                                        <img src={comment.avatar} alt="" className="profile-photo-sm" />
                                        <p><a href="timeline.html" className="profile-link">{comment.name} </a><i className="em em-laughing"></i> {comment.content} </p>
                                    </div>)
                            })} */}
                                        <form onSubmit={this.onSubmitComment.bind(this,item.hash)}>
                                            <div className="post-comment">
                                                <img src={"data:image/jpeg;base64," + profile.user.avatar} alt="" className="profile-photo-sm" />
                                                <input type="text"   className="form-control" placeholder="Post a comment" id={item.publicKey} name={item.publicKey} onChange={e => this.onCommentChange(e.target.value,e.target.name)}  ></input>
                                            </div>
                                            <button type="submit"  className="btn btn-primary pull-right">Comment</button>
                                        </form>
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
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-3">
                </div>
                <div className="col-md-8 news" >
                    <div className="create-post">
                        <div className="row">
                            <form onSubmit={this.onHandleSubmit}>
                                <div className="col-md-7 col-sm-7">
                                    <div className="form-group">
                                        <img src={"data:image/jpeg;base64," + this.props.auth.user.avatar} alt="" className="profile-photo-md" />
                                        <textarea onChange={this.onHandleChange} name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-5">
                                    <div className="tools">
                                        <ul className="publishing-tools list-inline">
                                            <li><a href="/"><i className="ion-compose"></i></a></li>
                                            <li><a href="/"><i className="ion-images"></i></a></li>
                                            <li><a href="/"><i className="ion-ios-videocam"></i></a></li>
                                            <li><a href="/"><i className="ion-map"></i></a></li>
                                        </ul>
                                        <button type="submit" className="btn btn-primary pull-right" >Post</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {postItems}
                </div>
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

export default connect(mapStateToProps, { getPost, getOwnerPost, postAction, getCurrentUser,sendComment })(withRouter(News));
