var http = require('http')

// Create an HTTP proxy
http.createServer(function (req, res) {
  console.log('request received on proxy');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to port 9000!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);

http.createServer((request, response) => {
  console.log('request received on server');
  var requestOptions = {
    host: 'localhost',
    port: 9000,
    path: request.url,
    method: request.method
  };

  var proxyRequest = http.request(requestOptions, (proxyResponse) => {
    console.log('writing proxy response to HTTP Server response writable stream');
    proxyResponse.pipe(response);
  });
  console.log('piping data from http server request to proxyRequest writable stream');
  request.pipe(proxyRequest);
}).listen(8080);

