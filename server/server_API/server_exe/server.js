// Include all the nodeJS library files

// load .env data into process.env
require('dotenv').config();
var cors = require('cors')

// Web server config
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

// Setting port and creating an instant of a server
const PORT = process.env.PORT || 8080; // CHANGE
const app = express();

// Get and Post request statistics
app.use(morgan('dev')); // CHANGE
// app.use(cookiesState()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
app.use(bodyParser.json())

// Express will serve Frontend Files from /public folder
app.use(express.static('public'));

// Our routes are extensions from /users path
const usersRoutes = require('./user_routes');
app.use('/home', usersRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



