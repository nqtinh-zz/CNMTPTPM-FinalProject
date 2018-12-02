import React, { Component } from 'react';


class ProfileMenu extends Component {
  render() {
    return (
      <div>
      	
      	
       <div className="col-md-3">
	        
	        <ul className="edit-menu">
	            <li className="active"><i className="icon ion-ios-information-outline"></i><a href="edit-profile-basic.html">Basic Information</a></li>
	            <li><i className="icon ion-ios-briefcase-outline"></i><a href="edit-profile-work-edu.html">Education and Work</a></li>
	            <li><i className="icon ion-ios-heart-outline"></i><a href="edit-profile-interests.html">My Interests</a></li>
	            <li><i className="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Account Settings</a></li>
	            <li><i className="icon ion-ios-locked-outline"></i><a href="edit-profile-password.html">Change Password</a></li>
	        </ul>
	    </div>

      </div>
    );
  }
}

export default ProfileMenu;
