// index.js - lab 11: Javascript events and forms
// Author: Ekaterina Mcleod and Tanner Norriss-Spano
// Date: 05/19/2024


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert the string to an array, sort it, and join it back into a string
    return inputString.split('').sort().join('');
}

$(document).ready(function() {
    // Event listener for form submission
    $("#submit").click(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the value of the input field
        const userName = $("#user-name").val();
        
        // Sort the input value
        const userNameSorted = sortString(userName);
        
        // Append a new div with the sorted value to the output div
        $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
});


