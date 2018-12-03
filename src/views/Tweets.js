import React, { Component } from 'react';
import Activity from '../components/activity'
import News from '../components/news'

class Tweets extends Component {

    render() {
        return (
            <div id="page-contents">
                <div className="row">
                    <News />
                    <Activity />
                </div>
            </div>

        );
    }
}

export default Tweets;
