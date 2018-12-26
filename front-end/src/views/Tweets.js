import React, { Component } from 'react';
import News from '../components/News/news'
import { Helmet } from 'react-helmet'
import MenuTimeline from '../components/Menu/menuTimeline';

class Tweets extends Component {
    render() {
        return (
                <div className="container">
                    <div className="timeline">
                        <MenuTimeline />
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

export default Tweets;
