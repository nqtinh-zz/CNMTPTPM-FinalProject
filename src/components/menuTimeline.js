import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class MenuTimeline extends Component {
    render() {
        return (
            <div>
                <div className="timeline-cover">
                    <div className="timeline-nav-bar hidden-sm hidden-xs">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="profile-info">
                                    <img src="images/ava.jpg" alt="" className="img-responsive profile-photo" />
                                    <h3>Sarah Cruiz</h3>
                                    <p className="text-muted">Creative Director</p>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <ul className="list-inline profile-menu">
                                    <li class="ProfileNav-li">
                                        <div class="ProfileNav">
                                            <Link to="/tweets">Tweets</Link><br />
                                            {this.props.tweetsNum}
                                            </div>
                                    </li>
                                    <li class="ProfileNav-li">
                                        <div class="ProfileNav">
                                            <Link to="/following">Following</Link><br />
                                            {this.props.followingNum}
                                            </div>
                                    </li>
                                    <li class="ProfileNav-li">
                                        <div class="ProfileNav">
                                            <Link to="/followers">Followers</Link><br />
                                            {this.props.followersNum}
                                            </div>
                                    </li>
                                    
                                </ul>
                                <ul className="follow-me list-inline cedit">
                                <li><Link to="/editprofile"><button className="btn-primary btneidt" >Edit Profile</button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-mobile hidden-lg hidden-md">
                        <div className="profile-info">
                            <img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" />
                            <h4>Sarah Cruiz</h4>
                            <p className="text-muted">Creative Director</p>
                        </div>
                        <div className="mobile-menu">
                            <ul className="list-inline">
                                <li><a href="timeline.html" >Tweets</a></li>
                                <li><a href="timeline-about.html">Following</a></li>
                                <li><a href="timeline-album.html">Followers</a></li>
                                <li><a href="timeline-friends.html">Lists</a></li>
                                <li><a href="timeline-friends.html">Moments</a></li>
                            </ul>
                            <button className="btn-primary">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        followersNum: state.followersReducer.followersNumber,
        followingNum: state.followingReducer.followingNumber,
        tweetsNum: state.personalReducer.tweetsNum,
    }
}

export default connect(mapStateToProps)(MenuTimeline);

