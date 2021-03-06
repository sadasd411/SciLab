// load .env file data --------------------------------------
require("dotenv").config();

// import express and other libraries. ----------------------
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.MY_PORT;

// configure express app server ----------------------------
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());


// configure mongoose to connect -----------------------------
require('./config/mongoose.config');

// add routes to listen --------------------------------------
const experimentRoutes = require('./routes/experiment.route');    /// check if this is the right name
experimentRoutes(app);
require('./routes/procedure.route')(app);

require('./routes/user.routes')(app);           // this shud be fine coz using for login.
// require('./routes/dashboard.routes')(app);        // dashboard here, check the name for this one.

// set up the server for listening
app.listen(port, () => {
    console.log("The express app server is listening on port: ", port);
});
