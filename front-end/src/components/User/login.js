import React, { Component } from 'react';
import './User/User.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/User/authAction';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            priKey: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const priKey = event.target.value;
        this.setState({ priKey });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.loginUser({privateKey: this.state.priKey});

    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
          this.props.history.push('/tweets');
        }
      }
      componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
          this.props.history.push('/tweets');
        }
      }

    render() {

        return (
            <section className="sign-in">
                <div className="container-log">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                            <Link to="/register"><div className="signup-image-link">Create an account</div></Link>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form onSubmit={this.handleSubmit} className="register-form" id="login-form">
                                <div className="form-group-log">
                                    <label className="labelForm" ><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input className="inputForm" onChange={this.handleChange} value={this.state.priKey} type="text" /*name="your_name" id="your_name"*/ placeholder="Import your Private key" />
                                </div>
                                <div className="form-group-log form-button">
                                    <input className="inputForm" type="submit" className="form-submit" value="Log in" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  

const mapStateToProps= (state)=>({
    auth: state.authReducer
})



export default connect(mapStateToProps, { loginUser })(Login);