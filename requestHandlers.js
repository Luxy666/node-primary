const queryString = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start (response) {
    console.log("Request handler for 'start' was called.");
        const body = `
            <html>
                <head>
                    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />

                </head>
                <body>
                    <form action="/upload" enctype="multipart/form-data" method="post">
                        <input type="file" name="upload" />
                        <input type="submit" value="Upload file" />
                    </form>
                </body>
            </html>
        `
        response.writeHead(200, {
            "Content-type": "text/html"
        });
        response.write(body);
        response.end();
}

function upload (response, request) {
    console.log("Request handler for 'upload' was called.");
    const form = new formidable.IncomingForm();
    form.parse(request, (error, fields, files) => {
        fs.renameSync(files.upload.path, '/Users/luzhe/Desktop/tencent.jpg');
        response.writeHead(200, {
            "Content-type": "text/html"
        });
        response.write("Received image: <br/>");
        response.write("<img src='/show' />");
        response.end();
    })
}

function show(response) {
    console.log("Request handler for 'show' was called.");
    fs.readFile('/Users/luzhe/Desktop/tencent.jpg', 'binary', (error, file) => {
        if (error) {
            response.writeHead(500, {
                "Content-type": 'text/plain'
            });
            response.write(`${ error }\n`);
            response.end();
        } else {
            response.writeHead(200, {
                "Content-type": 'image/jpg'
            });
            response.write(file, 'binary');
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;
