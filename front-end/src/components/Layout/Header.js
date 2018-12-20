import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/User/authAction';
class Header extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        //this.props.clearCurrentProfile();
    }
    onClickAvatar(e){
        e.preventDefault();
    }
    render() {
        const authLink = (
            <div>
                <header id="header">
                    <nav className="navbar navbar-default navbar-fixed-top menu">
                        <div className="container">
                            <div className="navbar-header">
                                {/* <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <a href="/" className="dropdown-toggle" data-toggle="dropdown" ><i className="icon ion-android-mail"></i>   Message </a>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="icon ion-android-notifications"></i>  Notifications</a>
                                    </li>
                                </ul> */}
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <Link to='/tweets'><i className="icon ion-android-home"></i>  Home </Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="nav-item">
                                        <Link to="/account">
                                            <img src= {"data:image/jpeg;base64,"+this.props.auth.user.avatar} alt="avatarlink" className="img-circle"
                                                title="You must have a gravatar connected to your email"
                                                style={{ width: '30px', marginRight: '0px' }} /></Link>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" onClick={this.onLogoutClick.bind(this)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <button className="btn btn-primary btntweet" >Logout</button>
                                        </a>
                                    </li>
                                </ul>
                                {/* <form className="navbar-form navbar-right hidden-sm">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search "></input>
                                        <i className="icon ion-android-search" ></i>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
        const guestLink = (
            <div>
                <header id="header">
                    <nav className="navbar navbar-default navbar-fixed-top menu">
                        <div className="container">
                            <div className="navbar-header">
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <Link to='/login'><i className="icon ion-android-home"></i>  Home </Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="">
                                        <Link to="/login"><div className="signup-image-link">Login</div></Link>
                                    </li>

                                    <li className="">
                                        <Link to="/register"><div className="signup-image-link">Register</div></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
        return (
            (this.props.auth.isAuthenticated ? authLink : guestLink)
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    //clearCurrentProfile : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
})
export default connect(mapStateToProps, { logoutUser /*,clearCurrentProfile*/ })(Header);