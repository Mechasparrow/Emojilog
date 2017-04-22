// server.js
// where your node app starts

// init project
var express = require('express');
var Sequelize = require('sequelize');
var app = express();

var Log


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

function setup() {
   Log.sync({force:true}); 
}


function init() {
  
  var initPromise = new Promise(
    
    (resolve, reject) => {
      sequelize.authenticate()
        .then(function(err) {
          console.log('Connection has been established successfully.');
          // define a new table 'users'
          Log = sequelize.define('logs', {
            emojie: {
              type: Sequelize.STRING
            },
          });
        
          resolve (Log);
        
        })
        .catch(function (err) {
          console.log('Unable to connect to the database: ', err);
          setup();
          reject();
      });
    }
    
  
  
  )
  
  return initPromise;
  
  
}

module.exports = {
  
    init: init
  
}