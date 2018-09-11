import React, { Component } from 'react';
import '../styles/input.css';


class InputName extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }
  
  handleInput = (elem) => {
    let value = elem.target.value;
    this.setState({ value });
  }

  handleSearch= () => {
    console.log(`Your value is ${ this.state.value }`);
  }
  render() {
    return (
      <div className="main">
        <input
          type="text"
          className="searchInput"
          placeholder = "What are you looking for?"
          value = { this.state.value }
          onChange = { this.handleInput }
        />
        <button onClick = {this.handleSearch } > Search </button>
      </div>
    )
  }
}

export default InputName;