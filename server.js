"use strict";
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      router = require('./router'),
      port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies.
app.use(bodyParser.json({limit: '5mb'}));

app.use('/', router);


app.listen(port);
console.log('server is running');