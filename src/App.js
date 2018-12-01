import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Timeline from './components/timeline.js';
class App extends Component {
  render() {
    return (
      <div>
        <Timeline/>

      </div>
    );
  }
}

export default App;
