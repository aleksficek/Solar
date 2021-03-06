import React, { Component } from 'react';
import './App.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Line} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Cell1',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Cell2',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Cell3',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Cell4',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Cell5',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Shunt',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Panel',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Panel',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

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

  chartParser(history) {
    var i;
    // console.log(history)
    for (i = 0; i < history.length; i++) {
      data.labels.push(history[i].date + history[i].time);
      data.datasets[0].data.push(history[i].voltages.cell1);
      data.datasets[1].data.push(history[i].voltages.cell2);
      data.datasets[2].data.push(history[i].voltages.cell3);
      data.datasets[3].data.push(history[i].voltages.cell4);
      data.datasets[4].data.push(history[i].voltages.cell5);
      data.datasets[5].data.push(history[i].voltages.panel);
      data.datasets[6].data.push(history[i].voltages.shunt);
    }
    // console.log(data)
  }

  refreshPage() {
    window.location.reload();
  };

  shutDown() {
    fetch('http://localhost:4000/shut_down')
    .then( response => {
      if (!response.ok) { throw response } // Return the complete error response for debugging purposes
      return response.text() //we only get here if there is no error
    })
    .then( recieved => {
      console.log(recieved);
    })
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
       // console.log(this.state.history);
    })
    .catch( error => {
      this.setState({ hasErrored: true, error }) // Save both error flag and error detail so you can send it to tools like bugsnag
    })
    .then(() => {
      this.chartParser(this.state.history);
      this.setState({ 
        history: this.state.history
       });
    }))
  };

  render() {
    return (
      <div className="App">
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-dark m-2">Date: </span>
        <span style={{ fontSize: 30 }} className="badge badge-dark m-2">{this.state.date} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-dark m-2">Time: </span>
        <span style={{ fontSize: 30 }} className="badge badge-dark m-2">{this.state.time} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 1: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.cell1} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 2: </span>
        <span style={{ fontSize: 30 }} className="badge badge-success m-2">{this.state.voltages.cell2} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 3: </span>
        <span style={{ fontSize: 30 }} className="badge badge-info m-2">{this.state.voltages.cell3} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 4: </span>
        <span style={{ fontSize: 30 }} className="badge badge-secondary m-2">{this.state.voltages.cell4} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Cell 5: </span>
        <span style={{ fontSize: 30 }} className="badge badge-danger m-2">{this.state.voltages.cell5} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Panel: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.panel} </span>
        </div>
        <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">Voltage of Shunt: </span>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.state.voltages.shunt} </span>
        </div>
        <div>
          <ProgressBar animated striped variant="primary" now={40} label={`${40}%`} />
          <ProgressBar animated striped variant="success" now={40} label={`${40}%`} />
          <ProgressBar animated striped variant="info" now={20} />
          <ProgressBar  animated striped variant="secondary" now={60} />
          <ProgressBar animated striped variant="danger" now={80} />
        </div>
        <button onClick={this.refreshPage} style={{ fontSize: 30 }} className="btn btn-outline-primary">Refresh </button>        
        <button onClick={this.shutDown} style={{ fontSize: 30 }} className="btn btn-outline-danger">Shut Down </button>
        <div>
          <h2>Solar Panel History</h2>
          <Line data={data} />
        </div>
      </div>
    );
  }
}

export default App;