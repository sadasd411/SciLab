
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

