import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './components/TodoApp' 
import Navbar from './components/Navbar/Navbar' 
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
          <Navbar />
          <TodoApp />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
