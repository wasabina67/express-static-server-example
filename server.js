require('dotenv').config();
const express = require('express');
const basicAuth = require('./basicAuth');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

if (process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD) {
  app.use(basicAuth);
}
