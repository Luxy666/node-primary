const http = require('http');
const url = require('url');

const start = (route, handle) => {
    http.createServer((request, response) => {
        const pathName = url.parse(request.url).pathname;
        console.log(`request for ${pathName} received`);

        route(handle, pathName);

        response.writeHead(200, {
            "Content-type": "text-plain"
        });
        response.write("Hello World!");
        response.end();
    }).listen(8000);

    console.log('Server has started');
};

exports.start = start;
