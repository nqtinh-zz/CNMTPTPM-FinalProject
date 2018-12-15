import React, { Component } from 'react';
import Activity from '../components/Activity/activity'
import News from '../components/News/news'
import { Helmet } from 'react-helmet'
class Tweets extends Component {
    render() {
        return (
            <div id="page-contents">
                <Helmet>
                    <title>Tweets</title>
                </Helmet>
                <div className="row">
                    <News />
                    <Activity />
                </div>
            </div>

        );
    }
}

export default Tweets;
