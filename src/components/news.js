import React, { Component } from 'react';
class News extends Component {
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
                    <div className="post-content">

                        <div className="post-date hidden-xs hidden-sm">
                            <h5>Sarah</h5>
                            <p className="text-grey">Sometimes ago</p>
                        </div>
                        {/*bấm vào để hiển thị*/}
                        <div  data-toggle="modal" data-target="#myModal">
                            <img src="http://placehold.it/1920x1280" alt="post-image" className="img-responsive post-image" />
                            <div className="post-container " >

                                
                                

                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                    <div className="post-detail">


                                        <div className="user-info">
                                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                            <p className="text-muted">Published a photo about 15 mins ago</p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                                            <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <input type="text" className="form-control" placeholder="Post a comment"></input>
                                        </div>
                                    </div> 
                                
                            </div>
                        </div>
                        {/*kết thúc*/}
                        {/*form hiển thị lên*/}
                        <div className="modal fade" id="myModal" role="dialog">
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
                                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                            <p className="text-muted">Published a photo about 15 mins ago</p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                                            <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
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

                    <div className="post-content">

                        <div className="post-date hidden-xs hidden-sm">
                            <h5>Sarah</h5>
                            <p className="text-grey">10/22/2016</p>
                        </div>
                        {/*bấm để hiển thị*/}
                        <div  data-toggle="modal" data-target="#myModal1">
                            <img src="http://placehold.it/1920x1280" alt="post-image" className="img-responsive post-image" />
                            <div className="post-container">

                                
                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                            <p className="text-muted">Yesterday</p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green"><i className="icon ion-thumbsup"></i> 49</a>
                                            <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <input type="text" className="form-control" placeholder="Post a comment"></input>
                                        </div>
                                    </div>
                            </div>



                         </div>
                         {/*kết thúc*/}
                         {/*form hiển thị lên*/}
                        <div className="modal fade" id="myModal1" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                                      <h4 className="modal-title"> Status detail</h4>
                                    </div>
                                    <div className="modal-body">
                                      
                                        <img src="http://placehold.it/1920x1280" alt="post-image" className="img-responsive post-image" />
                            <div className="post-container " >

                                
                                

                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                    <div className="post-detail">


                                        <div className="user-info">
                                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                            <p className="text-muted">Published a photo about 15 mins ago</p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                                            <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                        </div>
                                        <div className="line-divider"></div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
                                        <div className="post-comment">
                                            <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                            <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                        </div>
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

                    <div className="post-content">

                        <div className="post-date hidden-xs hidden-sm">
                            <h5>Sarah</h5>
                            <p className="text-grey">10/21/2016</p>
                        </div>
                        {/*bấm để hiển thị*/}
                        <div  data-toggle="modal" data-target="#myModal2">
                            <div className="post-container">
                                <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                <div className="post-detail">
                                    <div className="user-info">
                                        <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                        <p className="text-muted">2 days ago</p>
                                    </div>
                                    <div className="reaction">
                                        <a className="btn text-green"><i className="icon ion-thumbsup"></i> 49</a>
                                        <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                    </div>
                                    <div className="line-divider"></div>
                                    <div className="post-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                    </div>
                                    <div className="line-divider"></div>
                                    <div className="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                        <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div className="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                        <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div className="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                        <input type="text" className="form-control" placeholder="Post a comment"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*kết thuc*/}

                        {/*form hiển thị lên*/}
                        <div className="modal fade" id="myModal2" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                                      <h4 className="modal-title">Status detail</h4>
                                    </div>
                                    <div className="modal-body">
                                      
                                        <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                        <div className="post-detail">


                                            <div className="user-info">
                                                <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                                                <p className="text-muted">Published a photo about 15 mins ago</p>
                                            </div>
                                            <div className="reaction">
                                                <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                                                <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                                            </div>
                                            <div className="line-divider"></div>
                                            <div className="post-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                                            </div>
                                            <div className="line-divider"></div>
                                            <div className="post-comment">
                                                <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                            </div>
                                            <div className="post-comment">
                                                <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                            </div>
                                            <div className="post-comment">
                                                <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm" />
                                                <input type="text" className="form-control" placeholder="Post a comment"></input>
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
                </div>


            </div>
        );
    }
}

export default News;
