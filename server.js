const http = require('http');
const fs = require('fs');

let pageViews = 0;
let server = http.createServer((req, res) => {
    switch (req.url.toLowerCase()) {
        case '/':
            sendResponse(res, 'html/index.html', 200, 'text/html');
            pageViews++;
            break;

        case '/status':
            sendResponse(res, 'html/status.html', 200, 'text/html');
            pageViews++;
            break;

        case '/contact':
            sendResponse(res, 'html/contact.html', 200, 'text/html');
            pageViews++;
            break;

        case '/pageviews':
            pageViews++;
            fs.readFile('html/pageviews.html', {encoding: 'utf8'}, (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                data = data.replace('placeholder', pageViews);
                res.write(data);
                res.end();
            });
            break;

        case '/css/style.css':
            sendResponse(res, 'css/style.css', 200, 'text/css');
            break;

        case '/favicon.ico':
            sendResponse(res, 'img/favicon.ico', 200, 'image/x-icon');
            break;

        default:
            sendResponse(res, 'html/404.html', 404, 'text/html');
    }
});

server.listen(3000);

function sendResponse(res, file, status, type) {
    fs.readFile(file, (err, data) => {
        res.writeHead(status, {'Content-Type': type});
        res.write(data);
        res.end();
    });
}