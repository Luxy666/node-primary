const route = (handle, pathName, response, request) => {
    console.log(`About to route a request for ${pathName}`);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, request);
    } else {
        console.log(`No request handles found for ${pathName}`);
        response.writeHead(404, {
            "Content-type": "text-plain"
        });
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;
