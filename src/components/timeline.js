import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Activity from './activity.js'
import News from './news.js'
import MenuTimeline from './menuTimeline.js'
class Timeline extends Component {
    render() {
        return (
            <div>
        

                <div className="container">
              
                    <div className="timeline">
                        
                        
                    <MenuTimeline/>
                    <div id="page-contents">
                         <div className="row">
                             <News/>
                            <Activity/>
                         </div>
                     </div>
                   
                    </div>
                </div>

                <Footer/>

      </div>
        );
    }
}

export default Timeline;