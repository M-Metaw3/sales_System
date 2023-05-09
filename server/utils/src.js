require('./db')
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const express = require('express');
const app = express();
const xss = require('xss-clean');




helmet({
    crossOriginResourcePolicy: false,
  })
// app.use(express.static('public'));
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 500, // limit each IP to 100 requests per windowMs
  })
);


// Set up body parser middleware
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));

// Set up CORS middleware
app.use(cors());
module.exports = app;
