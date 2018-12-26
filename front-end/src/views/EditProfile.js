import React, { Component } from 'react';
import ProfileMenu from '../components/Profile/profile_menu'
import BasicInfo from '../components/Profile/basic_info'
import { Helmet } from 'react-helmet'
import MenuTimeline from '../components/Menu/menuTimeline';
class EditProfile extends Component {

    render() {
        return (
            <div className="container">
                <div className="timeline">
                    <MenuTimeline />
                    <div id="page-contents">
                        <Helmet>
                            <title>Edit Profile</title>
                        </Helmet>
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <BasicInfo />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditProfile;
