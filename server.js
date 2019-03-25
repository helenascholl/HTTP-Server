const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url.toLowerCase() === '/') {
        fs.readFile('html/index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url.toLowerCase() === '/status') {
        fs.readFile('html/status.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url.toLowerCase() === '/contact') {
        fs.readFile('html/contact.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url.toLowerCase() === '/css/main.css') {
        fs.readFile('css/main.css', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }else if (req.url.toLowerCase() === '/css/404.css') {
        fs.readFile('css/404.css', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    } else if (req.url.toLowerCase() === '/img/icon.png') {
        fs.readFile('img/icon.png', (err, data) => {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('html/404.html', (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
}).listen(3000);