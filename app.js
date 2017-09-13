'use strict';

var correctCounter = 0;
var username;

function username() {
  username = prompt('What is your name?');
  console.log('This user is: ' + username);
  alert('Hi ' + username + ', thanks for playing my game. Things will work best if you answer with Yes/No or Y/N (for yes or no questions.)');
}
username();

function questionOne() {
  var hometown = prompt('Yes or No, are one of these places my hometown? Washington D.C., Bow-Edison Washington or Vancouver Canada?').toUpperCase();
  console.log('hometown is: ' + hometown);
  if (hometown === 'YES' || hometown === 'Y') {
    alert(username + ' , you are correct! I\'m from little ol\' Bow-Edison in Skagit Valley north of Seattle about one hour.');
    correctCounter += 1;
  } else if (hometown === 'NO' || hometown === 'N') {
    alert(username + ' ,you are incorrect! I\'m from little ol\' Bow-Edison in Skagit Valley north of Seattle about one hour. Let\'s try again.');
  } else {
    alert('Hmm, ' + username + ' something isn\'t working. Are you remembering to answer with Yes/No or Y/N?');
  }
};
questionOne();

function questionTwo() {
  var romanticComedies = prompt('Do I like romantic comedies?').toUpperCase();
  console.log('Does Dumb and Dumber Count?: ' + romanticComedies);
  if (romanticComedies === 'YES' || romanticComedies === 'Y') {
    alert(username + ', no. I do not. Unless you consider Dumb and Dumber romantic?');
  } else {
    alert(username + ' , correct, not my favorite.');
    correctCounter += 1;
  }
};
questionTwo();

function questionThree() {
  var freeTime = prompt('In my precious free time would I read a book instead of watch a movie?').toUpperCase();
  console.log('freeTime is: ' + freeTime);
  if (freeTime === 'YES' || freeTime === 'Y') {
    alert('You are good at reading people.');
    correctCounter += 1;
  } else {
    alert('I do enjoy movies but most of the time I am eager to get back to my book much more.');
  }
};
questionThree();

//showing a counter for guesses using a for loop

function questionFour() {
  for (var i = 0; i < 4; i++) {
    var numKids = parseInt(prompt('Can you guess how many children I have?'));
    console.log('numKids is: ' + numKids);
    if (numKids < 3) {
      alert('More than that...');
    } else if (numKids > 3) {
      alert('Nope, less...');
    } else if (numKids === 3) {
      alert('Correct!');
      correctCounter += 1;
    } else {
      alert('Did ya enter a number?');
    }
    if (i >= 3) {
      alert('I have three little darlings.');
    }
  }
};
questionFour();

//show how to use array and while loop

function vacation() {
  alert('Last question. You get five tries.');
  var vacationCities = ['VANCOUVER', 'VICTORIA', 'DUBLIN', 'LONDON'];
  var guesses = 0;
  var correctGuess = false;

  while (guesses < 5 && correctGuess === false) {
    var vacationQuestion = prompt('Can you guess a city I went to on vacation last summer? Here is a clue. The beginning letter is V, D or L.').toUpperCase();
    console.log(' vacation guess is: ' + vacationQuestion);
    for (var i = 0; i < vacationCities.length; i++) {
      if (vacationQuestion === vacationCities[i]) {
        correctCounter += 1;
        correctGuess = true;
      }
    }
    guesses++;

    if (correctGuess === true) {
      alert('Correct! We went to Vancouver, Victoria, Explored Ireland and London. We also camped in the North Cascades and visited friends on the San Juan Islands. Fun summer! Work hard play hard...');
    } else {
      alert('Nope, guess again.');
    }
  }

};

vacation();

console.log(correctCounter);
alert('You answered ' + correctCounter + ' out of five questions correct. Thanks for playing, ' + username + ' .');
