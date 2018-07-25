const http = require('http');

const start = () => {
    http.createServer((request, response) => {
        console.log('request received');
        response.writeHead(200, {
            "Content-type": "text-plain"
        });
        response.write("Hello World!");
        response.end();
    }).listen(8000);

    console.log('Server has started');
};

exports.start = start;
