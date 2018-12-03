import React, { Component } from 'react';
import ProfileMenu from '../components/profile_menu'
import BasicInfo  from '../components/basic_info'

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
