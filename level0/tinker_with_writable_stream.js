var fs = require("fs");
var stream;
stream = fs.createWriteStream("data.txt");

stream.write("Tutorial on Node.js \n");
stream.write("Introduction \n");
stream.write("Events | ");
stream.write("Generators | ");
stream.write("Data Connectivity");
