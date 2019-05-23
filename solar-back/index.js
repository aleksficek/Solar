const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('we out here from the node server')
});

app.get('voltages/add', (req, res) => {

});

app.get('/voltage', (req, res) => {
    res.send('Sample voltage of 5')
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