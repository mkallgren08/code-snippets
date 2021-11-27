// ====================================
//      Dependencies
// ====================================




const bodyParser = require("body-parser");
const logger = require("morgan");


// import express from "express";
// import {engine} from "express-handlebars";

const express = require("express");
const exphbs = require("express-handlebars");
const engine=exphbs.engine
console.log("Preview of engine:");
console.log(JSON.stringify(engine,null,2))

// Controller Dependencies

// Initialize Express
const app = express();
// Set the port to use as a variable.
const port = process.env.PORT || 4000;


// Sets up the main handlebars page (main.hbs) to serve our web apps pages
// Sets the viewing engine of the app to handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Use body-parser and morgan with the app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(logger("dev"));

// set the app to listen for a server connection
app.listen(port, function () {
  console.log('App listening on port ' + port)
});

// ====================================
//      Database Setup with Mongoose
// ====================================





// ====================================
//      Routing
// ====================================

// Homepage Route
app.get('/', function (req, res) {
  let hbsObject = {
    title: "Homepage - Michael Kallgren",
    homepage: 'active',
    results: res
  }
  // console.log("hbsObj for rendering: " + JSON.stringify(hbsObject), null, 2);
  res.render("homepage.handlebars", hbsObject);
});

app.get('/external',function(req,res){
  // console.log(JSON.stringify(req.value,null,2))
  res.redirect("localhost:4000")
})


// Leaving this in as an example of how to communicate with a database
//Contact-Page Route
// app.get('/contact', function (req, res) {
//   Code.find({})
//     // Now, execute the rest of the query
//     .exec(function (error, result) {
//       // Log any errors
//       if (error) {
//         console.log(error);
//       }
//       // Or send the doc to the browser as a json object
//       else {
//         let hbsObject = {
//           title: "Contact - Michael Kallgren",
//           contact: 'active',
//           results: result
//         }
//         console.log("hbsObj for rendering: " + JSON.stringify(hbsObject, null, 2));
//         res.render("contact.handlebars", hbsObject);
//       }
//     });

// });


//+++++++++++++++++++++++++++++++++++++++++++++++++

// ====================================
//      Misc
// ====================================
