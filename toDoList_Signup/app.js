// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const EventEmitter = require('events'); 


const app = express();

app.use(express.static("public"));

app.get("/" ,function(req, res){
    res.sendFile (__dirname + "/signup.html");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});


const signUpButton = new EventEmitter('signUp');
const signInButton = new EventEmitter('signIn');
const container = new EventEmitter('container');

signUpButton.on('click', () => {
    container.classList.add("right-panel-active");
    console.log("Working");
});

signInButton.on('click', () => {
	container.classList.remove("right-panel-active");
});

