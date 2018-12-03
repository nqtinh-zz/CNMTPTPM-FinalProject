import React from 'react';
import './User/User.css'
import { Redirect ,Link} from 'react-router-dom'
const Register = () => {
    return (
            <section className="signup">
            <div className="container-log">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group-log">
                                <label className="labelForm"  for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input className="inputForm" type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group-log">
                                <label className="labelForm" for="email"><i className="zmdi zmdi-email"></i></label>
                                <input className="inputForm" type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group-log">
                                <label className="labelForm" for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input className="inputForm" type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group-log">
                                <label className="labelForm" for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input className="inputForm" type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group-log">
                                <input className="inputForm" type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label className="labelForm" for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="/" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group-log form-button">
                                <input className="inputForm" type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <Link to="/login"><div className="signup-image-link">I am already member</div></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;