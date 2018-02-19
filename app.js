require('dotenv').config();

const express = require('express');
const config = require('./config');

const app = express();
const port = config.get('port');
const secret = config.get('secret');

console.log(secret);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});