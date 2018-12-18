import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="topDiv"></div>
        <Navbar></Navbar>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
