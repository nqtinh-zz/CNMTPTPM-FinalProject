import React, { Component } from 'react';
class ListFollowers extends Component {
    render() {
        return (
            <div>
                <div class="col-md-3"></div>
                <div class="col-md-7 listfollowers">
                   
                        <div class="friend-list">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="friend-card">
                                    <img src="http://placehold.it/1030x360" alt="profile-cover" class="img-responsive cover" />
                                    <div class="card-info">
                                        <img src="http://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                                        <div class="friend-info">
                                            <a href="/" class="pull-right text-green">My Friend</a>
                                            <h5><a href="timeline.html" class="profile-link">Sophia Lee</a></h5>
                                            <p>Student at Harvard</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="friend-card">
                                    <img src="http://placehold.it/1030x360" alt="profile-cover" class="img-responsive cover" />
                                    <div class="card-info">
                                        <img src="http://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                                        <div class="friend-info">
                                            <a href="/" class="pull-right text-green">My Friend</a>
                                            <h5><a href="timeline.html" class="profile-link">John Doe</a></h5>
                                            <p>Traveler</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListFollowers;
