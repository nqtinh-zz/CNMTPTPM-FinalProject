import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="pen-title">
                <h1>Material Login Form</h1><span>Pen <i class='fa fa-code'></i> by <a href='http://andytran.me'>Andy Tran</a></span>
            </div>
            <div class="rerun"><a href="">Rerun Pen</a></div>
            <div class="container">
                <div class="card"></div>
                <div class="card">
                    <h1 class="title">Login</h1>
                    <form>
                        <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">Username</label>
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">Password</label>
                            <div class="bar"></div>
                        </div>
                        <div class="button-container">
                            <button><span>Go</span></button>
                        </div>
                        <div class="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                </div>
                <div class="card alt">
                    <div class="toggle"></div>
                    <h1 class="title">Register<div class="close"></div></h1>
                    <form>
                        <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">Username</label>
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">Password</label>
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">Repeat Password</label>
                            <div class="bar"></div>
                        </div>
                        <div class="button-container">
                            <button><span>Next</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;