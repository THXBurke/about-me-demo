'use strict';

var correctCounter = 0;
var username;

function username() {
  username = prompt('What is your name?');
  console.log('This user is: ' + username);
  alert('Hi ' + username + ', thanks for being willing to play my game. Things will work best if you answer with Yes/No or Y/N (for yes or no questions.)');
}
username();

function questionOne() {
  var hometown = prompt('Yes or No, are one of these places my hometown? Washington D.C., Bow-Edison Washington or Vancouver Canada?').toUpperCase();
  console.log('hometown is: ' + hometown);
  if (hometown === 'YES' || hometown === 'Y') {
    alert(username + ' ,You are correct! I\'m from little ol\' Bow-Edison in Skagit Valley north of Seattle about one hour.');
    correctCounter += 1;
  } else if (hometown === 'NO' || hometown === 'N') {
    alert(username + ' ,you are incorrect! I\'m from little ol\' Bow-Edison in Skagit Valley north of Seattle about one hour. Let\'s try again.');
  } else {
    alert('Hmm, ' + username + ' something isn\'t working. Are you remembering to answer with Yes/No or Y/N?');
  }
};
questionOne();
