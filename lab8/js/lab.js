// index.js - Lab 8: Anon Functions and Callbacks
// Author: Ekaterina Mcleod and Tanner Norriss-Spano
// Date: 05/06/2024



//array
numbers = [1,4,9,16,25];

//function
function squareNumber(num) {
    return num * num;
}

const squaredNumbers = numbers.map(squareNumber);

console.log(squaredNumbers);

 // Your map results data
 const mapResults = squaredNumbers.join(", ");
 

 
 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);

 console.log(mapResults);
 

