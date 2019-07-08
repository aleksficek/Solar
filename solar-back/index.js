const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/solar', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const userDataSchema = new Schema({
  date: {type: String, required: true},
  time: {type: String, required: true},
  voltages: {
    cell1: Number,
    cell2: Number,
    cell3: Number,
    cell4: Number,
    cell5: Number,
    shunt: Number,
    panel: Number
  }
}, {collection: 'test'});

const UserData = mongoose.model('UserData', userDataSchema);

app.use(cors());

let initialize = (api_url) => {
  return new Promise(function(resolve, reject) {
    request.get(api_url, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);  // replace (body) with (JSON.parse(body)) to parse JSON
      }
    })
  })
};

let decoder = (raw_data) => {

};



app.get('/', (req, res) => {
    res.send('Welcome to the Solaris server')
});

app.get('/get_data', (req, res) => {
  UserData.find()
    .then(function(doc) {
      res.send(doc);
    });
});

app.get('/shut_down', (req, res) => {
  const initializePromise = initialize('https://jsonplaceholder.typicode.com/todos/1')
  initializePromise.then(function(result) {
    res.send("The device has been shut down!");
  }, function(err) {
    console.log(err);
    res.send(err);
  });
});

app.get('/date_time', (req, res) => {

  var datetime = JSON.stringify(new Date()).split('T');
  datetime[0] = datetime[0].replace("\"","");
  datetime[1] = datetime[1].replace("\"","").replace("Z","");
  res.send(datetime);
});

app.get('/insert_data', (req, res) => {

  var datetime = JSON.stringify(new Date()).split('T');
  datetime[0] = datetime[0].replace("\"","");
  datetime[1] = datetime[1].replace("\"","").replace("Z","");

  const item = {
    date: datetime[0],
    time: datetime[1],
    voltages: {
      cell1: 0,
      cell2: 0,
      cell3: 0,
      cell4: 0,
      cell5: 0,
      shunt: 0,
      panel: 0
    }
  };

  const initializePromise = initialize('https://jsonplaceholder.typicode.com/todos/1')
  initializePromise.then(function(result) {
    // var decoded_array = decode(result);
    // item.voltages.cell1 = decoded_array[0];
    // item.voltages.cell2 = decoded_array[1];
    // item.voltages.cell3 = decoded_array[2];
    // item.voltages.cell4 = decoded_array[3];
    // item.voltages.cell5 = decoded_array[4];
    // item.voltages.shunt = decoded_array[5];
    // item.voltages.panel = decoded_array[6];
    console.log(item.date);
  }, function(err) {
    console.log(err);
    res.send(err);
  }).then(() => {
    let data = new UserData(item);
    data.save();
  });

  res.send(item);
  // res.send("The data with a date of: " + item.date + " and " + item.time + " has been added");
});

app.get('/test_voltage', (req, res) => {
  const fake_voltages = {
    v_cell1: 5,
    v_cell2: 4,
    v_cell3: 7,
    v_cell4: 2,
    v_cell5: 3,
    v_shunt: 10,
    v_panel: 1,
  };
  fake_voltages['v_cell1'] = 1000;
  res.send(fake_voltages)
});

app.get('/voltage', (req, res) => {
  const initializePromise = initialize('https://jsonplaceholder.typicode.com/todos/1')
  initializePromise.then(function(result) {
    res.send(result);
  }, function(err) {
    console.log(err);
    res.send(err);
  });
});

app.get('/panel_switch', (req, res) => {
  const initializePromise = initialize('https://jsonplaceholder.typicode.com/todos/1')
  initializePromise.then(function(result) {
    res.send(result);
  }, function(err) {
    console.log(err);
    res.send(err);
  });
});

app.get('/back_switch', (req, res) => {
  const initializePromise = initialize('https://jsonplaceholder.typicode.com/todos/1')
  initializePromise.then(function(result) {
    res.send(result);
  }, function(err) {
    console.log(err);
    res.send(err);
  });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

app.listen(4000, () => {
    console.log(`Products server listening on port 4000`)
});