import React, { Component } from 'react';
import { connect } from 'react-redux';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.news.name,
        }

    }
    render() {
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7 news" >

                    <div className="create-post">
                        <div className="row">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-group">
                                    <img src="images/ava.jpg" alt="" className="profile-photo-md" />
                                    <textarea name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish"></textarea>
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
                                    <button className="btn btn-primary pull-right">Publish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.news.posts.map((item, index) => {
                        return (
                            <div className="post-content">
                                <div className="post-date hidden-xs hidden-sm">
                                    <h5>{item.name}</h5>
                                    <p className="text-grey">{item.date}</p>
                                </div>
                                {/*bấm vào để hiển thị*/}
                                <div data-toggle="modal" data-target={"#"+item.id}>
                                    <img src="http://placehold.it/1920x1280" alt="post-image" className="img-responsive post-image" />
                                    <div className="post-container " >
                                        <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                        <div className="post-detail">
                                            <div className="user-info">
                                                <h5><a href="timeline.html" className="profile-link">{item.name}</a> <span className="following">following</span></h5>
                                                <p className="text-muted">{item.date}</p>
                                            </div>
                                            <div className="reaction">
                                                <a className="btn text-green"><i className="icon ion-thumbsup"></i> {item.like}</a>
                                                <a className="btn text-red"><i className="fa fa-thumbs-down"></i>{item.dislike}</a>
                                            </div>
                                            <div className="line-divider"></div>
                                            <div className="post-text">
                                                <p>{item.content} <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                            </div>
                                            <div className="line-divider"></div>
                                            {item.comments.map((comment, index) => {
                                                return (
                                                    <div className="post-comment">
                                                        <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                        <p><a href="timeline.html" className="profile-link">{comment.name} </a><i className="em em-laughing"></i> {comment.content} </p>
                                                    </div>)
                                            })}

                                            <div className="post-comment">
                                                <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                <input type="text" className="form-control" placeholder="Post a comment"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*kết thúc*/}
                                
                                {/*form hiển thị lên*/}
                                <div className="modal fade" id={item.id} role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Status detail</h4>
                                            </div>
                                            <div className="modal-body">
                                                <img src="http://placehold.it/1920x1280" alt="post-image" className="img-responsive post-image" />
                                                <div className="post-container " >
                                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                                    <div className="post-detail">
                                                        <div className="user-info">
                                                            <h5><a href="timeline.html" className="profile-link">{item.name}</a> <span className="following">following</span></h5>
                                                            <p className="text-muted">{item.date}</p>
                                                        </div>
                                                        <div className="reaction">
                                                            <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                                                            <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                                        </div>
                                                        <div className="line-divider"></div>
                                                        <div className="post-text">
                                                            <p>{item.content} <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                                        </div>
                                                        <div className="line-divider"></div>
                                                        {item.comments.map((comment, index) => {
                                                            return (
                                                                <div className="post-comment">
                                                                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                                    <p><a href="timeline.html" className="profile-link">{comment.name} </a><i className="em em-laughing"></i> {comment.content}</p>
                                                                </div>
                                                            )
                                                        })}

                                                        <div className="post-comment">
                                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                            <input type="text" className="form-control" placeholder="Post a comment"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*kết thuc*/}
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.personalReducer,
    }
}

export default connect(mapStateToProps)(News);
