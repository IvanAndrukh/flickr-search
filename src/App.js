import React, { Component } from 'react';
import InputName from './components/input';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>FLICKR SEARCH!</h3>
        <InputName/>
      </div>
    );
  }
}

export default App;
