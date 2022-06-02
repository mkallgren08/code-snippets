require('dotenv').config()
const express = require("express");
const cors = require("cors");
// const axios = require("axios")
const mongoose = require("mongoose")
const routes = require("./routes");
const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = require("./setupProxy")
// Declare a variable or static port number
const PORT = process.env.PORT || 3001;

// Instantiate the Express server and set its parameters
// Note - parameters can possibly be declared on a single line, but separated out for human readibility
const app = express();
app.use(cors());
// This replaces the old "app.use(bodyParser)"
app.use(express.json());
app.listen(PORT, function() {
	console.log(`Backend has booted ==> Server is now running on port ${PORT}!`);
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

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
};


// Provide a default "get" to test that the server can pass data; 
// check the connection on ${PORT}/test_data to see if "Hello World" is displayed
app.get('/test_data', (req, res) => {res.json("Hello World")});