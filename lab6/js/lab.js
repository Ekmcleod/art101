// index.js - Lab 6: Arrays and Objects
// Author: Ekaterina Mcleod
// Date: 06/28/2024



// variables

let myTransport = ["car", "bike", "bus"];

//object

let myMainRide = {
  make: "Jeep",
  model: "Wrangler",
  year: 2021,
  color: "Grey",
  age: function() {
    return 2024 - this.year;
  }
};

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("my Main Ride: <pre> ",
JSON.stringify(myMainRide, null, '\t'),"</pre>");
