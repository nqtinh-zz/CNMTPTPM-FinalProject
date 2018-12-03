import React ,{Component} from 'react';
import './User/User.css';
import { Redirect ,Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {loginAction} from '../../actions/User/loginAction';
class Login extends Component  {
    constructor(props){
        super(props);
        this.state={
            priKey : '',
        }
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
        console.log(this.props.login.loginStatus);
    }
    handleChange(event){
        const priKey = event.target.value;
        this.setState({priKey});
    }
    //console.log(this.props.login.test);
    handleSubmit(event){
        this.props.dispatch(loginAction(this.state.priKey));
        event.preventDefault();
    }


    render(){
        if(!this.props.login.loginStatus)
 {   return (
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
                                <input className="inputForm" onChange={this.handleChange} type="text" /*name="your_name" id="your_name"*/ placeholder="Import your Private key"/>
                            </div>
                            <div className="form-group-log form-button">
                                <input className="inputForm" type="submit"  className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
       
    )}else
        return  ( <Redirect to="/" />)
}
}

function mapStateToProps(state) {
    return {
        login : state.loginReducer
    };
}



export default connect(mapStateToProps)(Login);