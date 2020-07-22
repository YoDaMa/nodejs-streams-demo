var tls = require('tls'),
    fs = require('fs');
const { Socket } = require('dgram');

var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

var conn = tls.connect(8000, options, function() {
  console.log('Connection', conn.authorizationError ? 'unauthorized' : 'authorized');
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError)
  }
  process.stdin.pipe(conn);
  process.stdin.resume();
});

conn.setEncoding('utf8');

conn.on("data", function (data) {
  console.log(data.toString());
});

conn.on("end", () => {
    console.log('Ended');
});