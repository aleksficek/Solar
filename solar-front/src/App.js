import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      voltage: "",
    };
  }

  componentDidMount () {
    this.callApi();
  };

  callApi() {
    fetch('http://localhost:4000/voltage')
      .then(res => res.text())
      .then(res => this.setState({ voltage: res }))
      .catch(err => err);
  };

  render() {
    return (
      <div className="App">
        <p>Voltage: {this.state.voltage}</p>
      </div>
    );
  }
}

export default App;
