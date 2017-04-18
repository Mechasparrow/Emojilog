// server.js
// where your node app starts

// init project
var express = require('express');
var Sequelize = require('sequelize');
var app = express();

// default user list
var users = [
      ["John","Hancock"],
      ["Liz","Smith"],
      ["Ahmed","Khan"]
    ];
var User;


// setup a new database
// using database credentials set in .env
var sequelize = new Sequelize('database', process.env.DB_USER, process.env.DB_PASS, {
  host: '0.0.0.0',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
    // Security note: the database is saved to the file `database.sqlite` on the local filesystem. It's deliberately placed in the `.data` directory
    // which doesn't get copied if someone remixes the project.
  storage: '.data/database.sqlite'
});

// authenticate with the database

function init() {
  
  let initPromise = new Promise(
    
    (resolve, reject) => {
      sequelize.authenticate()
        .then(function(err) {
          console.log('Connection has been established successfully.');
          // define a new table 'users'
          User = sequelize.define('users', {
            firstName: {
              type: Sequelize.STRING
            },
            lastName: {
              type: Sequelize.STRING
            }
          });

          setup();
        
          resolve (User);
        
        })
        .catch(function (err) {
          console.log('Unable to connect to the database: ', err);
          reject();
      });
    }
    
  
  
  )
  
  return initPromise;
  
  
}




// populate table with default users
function setup(){
  User.sync({force: true}) // using 'force' it drops the table users if it already exists, and creates a new one
    .then(function(){
      // Add the default users to the database
      for(var i=0; i<users.length; i++){ // loop through all users
        User.create({ firstName: users[i][0], lastName: users[i][1]}); // create a new entry in the users table
      }
    });  
}

module.exports = {
  
    init: init,
    setup: setup
  
}