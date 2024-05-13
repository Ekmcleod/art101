// index.js - Lab 9: Libraries and jQuery
// Author: Ekaterina Mcleod and Tanner Norriss-Spano
// Date: 05/12/2024

//add button to challenge section

$(document).ready(function() {
    // Append button to challenge section
    $('#challenge').append('<button id="challengeButton">Click me!</button>');
  
    // Append button to problems section
    $('#problems').append('<button id="problemsButton">Click me!</button>');

    //Append button to results section
    $('#results').append('<button id="resultsButton">Click me!</button>');


//Button event handlers
    $('#challengeButton').click(function() {
        alert('You clicked the challenge button!');
    });

    $('#problemsButton').click(function() {
        alert('You clicked the problems button!');
    });

    $('#resultsButton').click(function() {
        alert('You clicked the results button!');
    });
});
