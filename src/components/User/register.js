import React from 'react';

const Register = () => {
    return (
        <div>
            <div class="pen-title">
                <h1>Register</h1>
            </div>
            <div class="container">
                <div class="card"></div>
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

export default Register;