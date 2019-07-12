import React, { Component } from 'react';

import Home from './components/Pages/Home'
import './App.css';

class App extends Component {

  render() {
    return (
      <div style={{ backgroundColor: '#EEEEEE' }} className="container">
          <Home />
      </div>
    );
  }
}

export default App;
