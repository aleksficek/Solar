const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
app.use(cors());

function initialize(api_url) {
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

app.get('/', (req, res) => {
    res.send('Welcome to the Solaris server')
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