// server.js
// where your node app starts

// init project
var express = require('express');
var Sequelize = require('sequelize');
var app = express();
var datastore = require('./src/datastore.js').default


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/users", function (request, response) {
  var dbUsers=[];
  User.findAll().then(function(users) { // find all entries in the users tables
    users.forEach(function(user) {
      dbUsers.push([user.firstName,user.lastName]); // adds their info to the dbUsers value
    });
    response.send(dbUsers); // sends dbUsers back to the page
  });
});

// creates a new entry in the users table with the submitted values
app.post("/users", function (request, response) {
  User.create({ firstName: request.query.fName, lastName: request.query.lName});
  response.sendStatus(200);
});

// drops the table users if it already exists, populates new users table it with just the default users.
app.get("/reset", function (request, response) {
  setup();
  response.redirect("/");
});

// removes all entries from the users table
app.get("/clear", function (request, response) {
  User.destroy({where: {}});
  response.redirect("/");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});