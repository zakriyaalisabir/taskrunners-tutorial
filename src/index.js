const express = require('express');
const path = require('path');
const app = express();
const { init } = require('../config');

init();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = { app };
