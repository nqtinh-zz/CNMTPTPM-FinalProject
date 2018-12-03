import React, { Component } from 'react';
import ListFollowing from '../components/list_following'

class Following extends Component {

    render() {
        return (
            <div id="page-contents">
                <div className="row">
                    <ListFollowing />
                    
                </div>
            </div>

        );
    }
}

export default Following;
