import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import MenuTimeline from './menuTimeline.js'
import ProfileMenu from './profile_menu.js'
import BasicInfo from './basic_info.js'

class EditProfileBasic extends Component {
  render() {
    return (
      <div>
      	
      	<Header/>
                <div className="container">
              
                    <div className="timeline">
                        
                        
	                    <MenuTimeline/>
	                    <div id="page-contents">
	                         <div className="row">
	                         	<ProfileMenu/>
	                         	<BasicInfo/>
	                         </div>
	                     </div>
	                   
	                </div>
                </div>

        <Footer/>
        

      </div>
    );
  }
}

export default EditProfileBasic;