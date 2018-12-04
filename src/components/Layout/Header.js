import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <div>
        	
 

    <header id="header">
        <nav className="navbar navbar-default navbar-fixed-top menu">
            <div className="container">
               
                <div className="navbar-header">
                    <ul className="nav navbar-nav navbar-right main-menu">
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown" ><i className="icon ion-android-mail"></i>   Message </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right main-menu">
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="icon ion-android-notifications"></i>  Notifications</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right main-menu">
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="icon ion-android-home"></i>   Home </a>
                        </li>
                    </ul>
                </div>
               
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right main-menu">
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><button className="btn btn-primary btntweet" >Tweet</button></a>
                            <ul className="dropdown-menu newsfeed-home">
                                <li><a href="index.html">Landing Page 1</a></li>
                                <li><a href="index-register.html">Landing Page 2</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-right hidden-sm">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search "></input>
                            <i className="icon ion-android-search" ></i>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    
 
   


      </div>
    );
  }
}

export default Header;
