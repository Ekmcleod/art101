document.addEventListener("DOMContentLoaded", function() {
    function fizzBuzz() {
        let oneLongString = "";

        for (let num = 1; num <= 200; num++) {
            let output = num + " -"; // Start with the number followed by a dash

            if (num % 3 === 0) output += " Fizz!";
            if (num % 5 === 0) output += " Buzz!";
            if (num % 7 === 0) output += " Boom!";

            // Add a default output if none of the conditions are met
            if (output === num + " -") output += " Nothing";

            oneLongString += `<div class="output-item">${output}</div>`;
        }

        $("#output").html(oneLongString);
    }

    fizzBuzz();
});
