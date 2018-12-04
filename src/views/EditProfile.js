import React, { Component } from 'react';
import ProfileMenu from '../components/Profile/profile_menu'
import BasicInfo  from '../components/Profile/basic_info'

class EditProfile extends Component {

    render() {
        return (
            <div id="page-contents">
                <div className="row">
                    <ProfileMenu />
                    <BasicInfo />
                </div>
            </div>

        );
    }
}

export default EditProfile;
