const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-type": "text-plain"
    });
    response.write("Hello World!");
    response.end();
}).listen(8000);
