// server.js
// where your node app starts

// init project
var express = require('express');
var Sequelize = require('sequelize');
var app = express();
var datastore = require('./src/datastore.js');

var Log; 

datastore.init().then (function (data) {
  Log = data;
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//Retrieve the list of logs that currently exist
app.get("/logs", function (request, response) {
  var dbLogs = [];
  Log.findAll().then (function (logs) {
      logs.forEach(function (log) {
        dbLogs.push(log.emojie);
      });
      response.send(dbLogs);
  });
});

// creates a new entry in the users table with the submitted values
app.post("/logs", function (request, response) {
  console.log(request.query);
  Log.create({ emojie:request.query.emojie});
  response.sendStatus(200);
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});