var http = require('http')

var port = 8080

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World From Bhushan and Amol\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
