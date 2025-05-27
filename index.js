let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer(function(req, res) {
    let filePath = './';

    switch (req.url) {
        case '/':
            filePath += 'index.html';
            break;
        case '/about':
            filePath += 'about.html';
            break;
        case '/contact-me':
            filePath += 'contact-me.html';
            break;
        default:
            filePath += '404.html';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}).listen(8080, () => {
    console.log("Server listening...");
})