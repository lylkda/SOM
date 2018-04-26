const express = require("express");
const passport = require('passport');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build")); 

app.use(passport.initialize());

passport.use('local-login', require('./passport/local-login'));
passport.use('local-signup', require('./passport/local-signup'));

const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://lylkda:testing123@ds159129.mlab.com:59129/nominations",
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
