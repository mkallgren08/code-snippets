require('dotenv').config()
const express = require("express");
const cors = require("cors")
const axios = require("axios")
const mongoose = require("mongoose")
// Declare a variable or static port number
const PORT = process.env.PORT || 3001;

// Instantiate the Express server and set its parameters
// Note - parameters can possibly be declared on a single line, but separated out for human readibility
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, function() {
	console.log(`Backend has booted ==> Server is now running on port ${PORT}!`);
});

// Provide a connection string for MongoDB instance; else set to "false" to bypass DB connectivity
let mongoConnect = false

if (mongoConnect){
  // Set up promises with mongoose
  mongoose.Promise = global.Promise;
  // Connect to the Mongo DB
  mongoose.connect(mongoConnect);
  // create a shorthand constant to refer to the MongoDB connection
  const db = mongoose.connection;

  // Show any mongoose errors
  db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
  });

  // Once logged in to the db through mongoose, log a success message
  db.once("open", function () {
    console.log(`Mongoose connection to ${mongoConnect} successful.`);
  });
}


// Provide a default "get" to test that the server can pass data; 
// check the connection on ${PORT}/test_data to see if "Hello World" is displayed
app.get('/test_data', (req, res) => {res.json("Hello World")});