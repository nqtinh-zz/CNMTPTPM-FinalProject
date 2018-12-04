import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListFollowing extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.following.followingList);
    }
    render() {
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7 listfollowing">

                    <div className="friend-list">
                        <div className="row">

                            {this.props.following.followingList.map((item, index) => {
                                return (
                                    <div className="col-md-6 col-sm-6">
                                        <div className="friend-card">
                                            <img src="http://placehold.it/1030x360" alt="profile-cover" className="img-responsive cover" />
                                            <div className="card-info">
                                                <img src="http://placehold.it/300x300" alt="user" className="profile-photo-lg" />
                                                <div className="friend-info">
                                                    <a href="/" className="pull-right text-green">{item.friendOrNot ? 'My Friend' : 'Add Friend'}</a>
                                                    <h5><a href="timeline.html" className="profile-link">{item.name}</a></h5>
                                                    <p>{item.carrer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        following: state.followingReducer
    }
}

export default connect(mapStateToProps)(ListFollowing);