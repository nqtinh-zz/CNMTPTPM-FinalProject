import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Timeline from './components/timeline.js';
import Edit_Profile_Basic from './components/edit_profile_basic.js'

class App extends Component {
  render() {
    return (
      <div>
      	
      	
        <Edit_Profile_Basic/>

      </div>
    );
  }
}

export default App;
