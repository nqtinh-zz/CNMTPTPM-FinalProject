import React, { Component } from 'react';
import './User/User.css'
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerAccount ,signNewAccount} from '../../actions/User/authAction';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            privateKey: '',
            publicKey:'',
            priKeySign:'SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P',
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        this.setState({ click: true });
        this.props.signNewAccount(
            {priKeySign: this.state.priKeySign}
         ); 
        this.setState({
            privateKey: this.props.privateKey,
            publicKey: this.props.publicKey,
        })
        //console.log(this.state);
            
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
          this.props.history.push('/tweets');
        }
        else{
            this.props.history.push('/register');
        }
      }
    render() {
        const registerPage = (
            <section className="signup">
                <div className="container-log"><div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onClick={this.onClick} className="register-form" id="register-form">
                            <div className="form-group-log">
                                <label className="labelForm" className="label-agree-term"><span><span></span></span>After click Register , we will send you your Public and PrivateKey.</label>
                                <label className="labelForm" className="label-agree-term"><span><span></span></span>You must save your private key and never public it.</label>
                            </div>
                            <div className="form-group-log form-button">
                                <input className="inputForm" type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <Link to="/login"><div className="signup-image-link">I am already member</div></Link>
                    </div>
                </div>
                </div>
            </section>);
        const privateKeyPage = (<div className="pri-container">
            <div className="privatekey-content">
                <div className="title-container">Save Your <span className="pri-title">Private Key</span>.</div>
                <div className="form-group">
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3" value={this.props.privateKey}></textarea>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3" value={this.props.publicKey}></textarea>
                </div>
                <div className="">**Do not lose it!** It cannot be recovered if you lose it.</div>
                <div>**Make a backup!** Secure it like the millions of dollars it may one day be worth.</div>
                <div className="">**Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.</div>
                <br></br>
                <Link to="/login"><button className="form-submit">To Login</button></Link>
                <br/>
                <br/>
            </div>

            </div>

        )
        return (
            <div>
                {this.state.click ? privateKeyPage : registerPage}
            </div>
        )
    }
}
Register.proptypes = {
    registerAccount: PropTypes.func.isRequired,
    signNewAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {

    return {
        privateKey: state.registerReducer.privateKey,
        publicKey : state.registerReducer.publicKey,
        auth: state.authReducer,
    }
}

export default connect(mapStateToProps, { registerAccount, signNewAccount })(withRouter(Register));
