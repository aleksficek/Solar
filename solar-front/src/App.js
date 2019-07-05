import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      date : '',
      time: '',
      voltages: {},
      history: [],
    };
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  }

  refreshPage() {
    window.location.reload();
  };

  // Replace with below functions for automatic refresh
  componentDidMount() {
    this.callApi();
  };

  // componentDidMount() {
  //   this.interval = setInterval(() => this.callApi(), 5000);
  // };

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // };

  callApi() {
    fetch('http://localhost:4000/insert_data')
    .then( response => {
      if (!response.ok) { throw response } // Return the complete error response for debugging purposes
      return response.json()  //we only get here if there is no error
    })
    .then( json => {
      this.setState({ 
        date: json.date,
        time: json.time,
        voltages: json.voltages,
       }); 
    })
    .catch( error => {
      this.setState({ hasErrored: true, error }) // Save both error flag and error detail so you can send it to tools like bugsnag
    })
    .then(fetch('http://localhost:4000/get_data')
    .then( response => {
      if (!response.ok) { throw response } // Return the complete error response for debugging purposes
      return response.json()  //we only get here if there is no error
    })
    .then( json => {
      this.setState({ 
        history: json
       }); 
       console.log(this.state.history);
    })
    .catch( error => {
      this.setState({ hasErrored: true, error }) // Save both error flag and error detail so you can send it to tools like bugsnag
    }))
  };

  render() {
    return (
      <div className="App">
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Date: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.date} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Time: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.time} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 1: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell1} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 2: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell2} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 3: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell3} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 4: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell4} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 5: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell5} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Panel: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.panel} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Shunt: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.shunt} </span>
        </div>
        <button onClick={this.refreshPage} style={{ fontSize: 30 }} className="btn btn-outline-primary">Refresh </button>        
      </div>
    );
  }
}

export default App;