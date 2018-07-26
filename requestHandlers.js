function start () {
    console.log("Request handler for 'start' was called.");
    return 'Hello start';
}

function upload () {
    console.log("Request handler for 'upload' was called.");
    return 'Hello upload';
}

exports.start = start;
exports.upload = upload;
