var fs = require("fs");
var stream;
stream = fs.createReadStream("data.txt");

// Our intuition says to just... print it!
console.log(stream);

