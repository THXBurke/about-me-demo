'use strict';

var correctCounter = 0;
var username;

function username() {
  username = prompt('What is your name?');
  console.log('This user is ' + username);
  alert('Hi ' + username + ' Thanks for being willing to play my game. Things will work best if you answer with Yes/No or Y/N');
}
username();
