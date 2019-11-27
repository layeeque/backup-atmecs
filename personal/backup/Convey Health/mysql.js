const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
var https = require('https');
var nodemailer = require('nodemailer');
const restService = express();
var username = "";
var pass = "";
var valotp = "";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "conveyhealth"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM patient", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].id);
  });
});