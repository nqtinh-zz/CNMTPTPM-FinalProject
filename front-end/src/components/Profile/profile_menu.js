import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileMenu extends Component {
	render() {
		return (
			<div>
				{/* className="active" */}
					<ul className="edit-menu">
						<li><i className="icon ion-ios-heart-outline"></i><Link to="/account">Account Information</Link></li>
						<li ><i className="icon ion-ios-information-outline"></i><Link to="/editprofile">Edit Profile</Link></li>
						<li><i className="icon ion-ios-briefcase-outline"></i><Link to="/payment">Send Payment</Link></li>
						<li><i className="icon ion-ios-briefcase-outline"></i><Link to="/historyPayment">Payment History</Link></li>
						{/* <li><i className="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Account Settings</a></li>
						<li><i className="icon ion-ios-locked-outline"></i><a href="edit-profile-password.html">Change Password</a></li> */}
					</ul>
			</div>
		);
	}
}

export default ProfileMenu;
