var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
 
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 
 
app.listen(5001, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

//Models
var models = require("./app/models");
 
 //Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//For Handlebars
app.set('views', './app/views')
app.engine('handlebars', exphbs({
    defaultLayout: "main",
}));
app.set('view engine', 'handlebars');     

	
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport)

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);