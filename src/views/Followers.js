import React, { Component } from 'react';
import ListFollowers from '../components/list_followers'

class Followers extends Component {

    render() {
        return (
            <div id="page-contents">
                <div className="row">
                    <ListFollowers />
                    
                </div>
            </div>

        );
    }
}

export default Followers;
