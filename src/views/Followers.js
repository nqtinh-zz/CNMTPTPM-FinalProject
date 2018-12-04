import React, { Component } from 'react';
import ListFollowers from '../components/FollowList/list_followers'
import { Helmet } from 'react-helmet'
class Followers extends Component {

    render() {
        return (
            <div id="page-contents">
                <Helmet>
                    <title>Followers</title>
                </Helmet>
                <div className="row">
                    <ListFollowers />
                </div>
            </div>

        );
    }
}

export default Followers;
