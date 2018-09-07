import React, { Component } from 'react';

class InputName extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }
  
  handleInput(elem) {
    let value = elem.target.value;
    this.setState({ value });
  }

  handleSearch(){
    console.log(`Your value is ${ this.state.value }`);
  }
  render() {
    return (
      <div className="main">
        <p>Hello Oleh</p>
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