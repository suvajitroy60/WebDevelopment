// jshint esversion: 6
const EventEmitter = require('events');
 
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
