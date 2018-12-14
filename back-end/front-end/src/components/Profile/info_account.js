import React, { Component } from 'react';


class InfoAccount extends Component {
  render() {
    return (
      <div>
      	
      	
       <div className="col-md-4">
	        
	        <ul className="edit-menu">
	            <li className="active"><i className="icon ion-ios-information-outline"></i><a href="edit-profile-basic.html">Balance</a></li>
	            <li><i className="icon ion-ios-briefcase-outline"></i><a href="edit-profile-work-edu.html">Sequence</a></li>
	            <li><i className="icon ion-ios-heart-outline"></i><a href="edit-profile-interests.html">Bandwidths</a></li>
	            <li><i className="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Transiction</a></li>
	            <li><i className="icon ion-ios-locked-outline"></i><a href="edit-profile-password.html">Public key</a></li>
	        </ul>
	    </div>

      </div>
    );
  }
}

export default InfoAccount;
