import React, { Component } from 'react';
import News from '../News/news'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


class Personal extends Component {
  render() {
    return (
      <div className="container">
        <div className="timeline">
          <div>
            <div className="timeline-cover">
              <div className="timeline-nav-bar hidden-sm hidden-xs">
                <div className="row">
                  <div className="col-md-3">
                    <div className="profile-info">
                      <img src={"data:image/jpeg;base64," + this.props.auth.user.avatar} alt="" className="img-responsive profile-photo" />
                      <h3>{this.props.auth.user.name + ""}</h3>
                      <ul className="edit-menu">
                        <li><i className="icon ion-ios-heart-outline"></i><Link to="/account">Account Information</Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-md-9">
                    <ul className="list-inline profile-menu">
                      <li className="ProfileNav-li">
                        <div className="ProfileNav">
                          <br />  <Link to="/tweets">Tweets</Link><br />
                        </div>
                      </li>
                      <li className="ProfileNav-li">
                        <div className="ProfileNav">
                          <br />   <Link to="/following">Following</Link><br />
                        </div>
                      </li>
                    </ul>
                    <ul className="follow-me list-inline cedit">
                      <li><Link to="/editprofile"><button className="btn-primary btneidt" >Edit Profile</button></Link></li>
                    </ul>
                  </div> */}
                </div>
              </div>

              <div className="navbar-mobile hidden-lg hidden-md">
                <div className="profile-info">
                  <img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" />
                  <h4>{this.props.name}</h4>
                  <p className="text-muted">{this.props.carrer}</p>
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
          <div id="page-contents">
            <Helmet>
              <title>Tweets</title>
            </Helmet>
            <div className="row">
              <News />

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Personal;
