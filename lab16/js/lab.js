/*
 * Lab 16: JSON and APIs
 * This script retrieves data from the XKCD API and displays it on the webpage.
 */

$(document).ready(function() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        data: {}, // No additional data is required for this API call
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the API call is successful
        success: function(data) {
            // Store the data in a variable
            var comicObj = data;

            // Log the data to the console for debugging
            console.log(comicObj);

            // Add the comic title to the challenge section
            $('#challenge-data').html('<strong>Title:</strong> ' + comicObj.title);

            // Create an image tag for the comic
            var comicImg = $('<img>')
                .attr('src', comicObj.img)
                .attr('alt', comicObj.alt)
                .attr('title', comicObj.alt);

            // Add the comic image to the problems section
            $('#problems-data').html(comicImg);

            // Add the alt text to the reflection section
            $('#reflection-data').html('<strong>Alt Text:</strong> ' + comicObj.alt);
        },
        // What we do if the API call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // Log the error to the console
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

