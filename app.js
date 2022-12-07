// importing things
require('dotenv').config()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const app = express();
const path = require('path')
require('./db/conn')
const cookieParser = require('cookie-parser')
const path = require("path")

app.use(express.json())
app.use(cookieParser())

app.use(require("./router/auth"));
app.use(cors());


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// make a localhost with port
dotenv.config({path: "../config.env"});

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Express is working on port ${server.address().port}`);
  });