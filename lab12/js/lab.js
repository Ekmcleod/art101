// index.js - lab 12: Conditionals
// Author: Ekaterina Mcleod and Tanner Norriss-Spano
// Date: 05/23/2024




// Function to assign a Hogwarts house based on the length of the name
function sortingHat(str) {
    // Count the number of letters in the string
    var length = str.length;
    
    // Get the remainder when divided by 4
    var mod = length % 4;
    
    // Determine the house based on the remainder and return its description
    if (mod === 0) {
        return "Gryffindor: Where dwell the brave at heart, daring, nerve, and chivalry.";
    } else if (mod === 1) {
        return "Ravenclaw: Where those of wit and learning will always find their kind.";
    } else if (mod === 2) {
        return "Slytherin: Where you'll meet your real friends, those cunning folks use any means to achieve their ends.";
    } else {
        return "Hufflepuff: Where they are just and loyal, those patient Hufflepuffs are true and unafraid of toil.";
    }
}

// Event listener for the submit button
document.getElementById("button").addEventListener("click", function() {
    // Get the input value
    var name = document.getElementById("input").value;
    
    // Get the house description using the sortingHat function
    var houseDescription = sortingHat(name);
    
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    
    // Style the new paragraph element
    newParagraph.style.fontWeight = "bold";
    newParagraph.style.color = "blue";
    
    // Set the text content of the new paragraph
    newParagraph.textContent = "The Sorting Hat has sorted you into " + houseDescription;
    
    // Append the new paragraph to the output div
    document.getElementById("output").appendChild(newParagraph);
});
