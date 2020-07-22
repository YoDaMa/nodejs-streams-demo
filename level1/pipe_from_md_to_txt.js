var fs = require("fs");
var readStream = fs.createReadStream("README.md");
var writeStream = fs.createWriteStream("dataOutput.txt");
readStream.pipe(writeStream);