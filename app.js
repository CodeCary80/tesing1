const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Works on my machine! Yo!';
  res.send(msg);
});

module.exports = app;
