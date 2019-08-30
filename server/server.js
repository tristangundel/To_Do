/******************************
Author: Tristan Gundel
Date_Updated: 20190828
******************************/

//random modules to use for practice
let events = require('events');    //event handler node module
let fs = require("fs");            // file input/output streams

//declare variables for use in framework
let express = require("express");
let app = express();
let session = require('express-session');
let bodyparser = require('body-parser');
let handlebars = require('express-handlebars').create({defaultLayout:'main'});

//set handlebars as the view engine for the application
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

//set port to host server on
app.set('port', 61519)

//mount static folder for scripts and css
app.use(express.static('./public'));

//page router scripts
let homePage = require('./routes/homepage.js')


app.use('/', homePage);

app.listen(app.get('port'), function(){
  console.log('Server started on localhost:' + app.get('port'));
});
