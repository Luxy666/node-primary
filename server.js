const http = require('http');
const url = require('url');

const start = (route, handle) => {
    http.createServer((request, response) => {
        const pathName = url.parse(request.url).pathname;
        let postData = '';
        console.log(`request for ${pathName} received`);
        route(handle, pathName, response, request);
    }).listen(8000);

    console.log('Server has started');
};

exports.start = start;
