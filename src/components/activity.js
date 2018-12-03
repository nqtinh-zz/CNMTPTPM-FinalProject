import React, { Component } from 'react';


class Activity extends Component {
  render() {
    return (
      <div>
      	
      	<div className="col-md-2 static">
                        <div id="sticky-sidebar">
                            <h4 className="grey">Sarah's activity</h4>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p> Commended on a Photo</p>
                                    <p className="text-muted">5 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p> Has posted a photo</p>
                                    <p className="text-muted">an hour ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p> Liked her friend's post</p>
                                    <p className="text-muted">4 hours ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p> has shared an album</p>
                                    <p className="text-muted">a day ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

      </div>
    );
  }
}

export default Activity;
