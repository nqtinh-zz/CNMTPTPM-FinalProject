import React, { Component } from 'react';
import ListFollowing from '../components/FollowList/list_following'
import { Helmet } from 'react-helmet'
class Following extends Component {

    render() {
        return (
            <div id="page-contents">
                <Helmet>
                    <title>Following</title>
                </Helmet>
                <div className="row">
                    <ListFollowing />
                </div>
            </div>

        );
    }
}

export default Following;
