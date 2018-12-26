import React, { Component } from 'react';
import ListFollowing from '../components/FollowList/list_following'
import { Helmet } from 'react-helmet'
import MenuTimeline from '../components/Menu/menuTimeline';
class Following extends Component {

    render() {
        return (
            <div className="container">
                <div className="timeline">
                    <MenuTimeline />
                    <div id="page-contents">
                        <Helmet>
                            <title>Following</title>
                        </Helmet>
                        <div className="row">
                            <ListFollowing />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Following;
