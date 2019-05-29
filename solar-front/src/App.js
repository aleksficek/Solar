import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      v_cell1: '',
      v_cell2: '',
      v_cell3: '',
      v_cell4: '',
      v_cell5: '',
      v_shunt: '',
      v_panel: '',
    };
  };

  componentDidMount () {
    this.callApi();
  };

  callApi() {
    fetch('http://localhost:4000/test_voltage')
    .then( response => {
      if (!response.ok) { throw response } // Return the complete error response for debugging purposes
      return response.json()  //we only get here if there is no error
    })
    .then( json => {
      this.setState({ 
        v_cell1: json.v_cell1,
        v_cell2: json.v_cell2,
        v_cell3: json.v_cell3,
        v_cell4: json.v_cell4,
        v_cell5: json.v_cell5,
        v_shunt: json.v_cell6,
        v_panel: json.v_cell7
       }); 
    })
    .catch( error => {
      this.setState({ hasErrored: true, error }) // Save both error flag and error detail so you can send it to tools like bugsnag
    })
  };

  render() {
    return (
      <div className="App">
        <p>Voltage of Cell 1: {this.state.v_cell1}</p>
        <p>Voltage of Cell 2: {this.state.v_cell2}</p>
        <p>Voltage of Cell 3: {this.state.v_cell3}</p>
        <p>Voltage of Cell 4: {this.state.v_cell4}</p>
        <p>Voltage of Cell 5: {this.state.v_cell5}</p>
      </div>
    );
  }
}

export default App;
