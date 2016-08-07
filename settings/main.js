const express = require('express');
const bodyParser = require('body-parser');
const users = require('../routes/user-routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', users);

module.exports = app;