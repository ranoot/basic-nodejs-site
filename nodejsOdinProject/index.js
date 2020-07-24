const http = require("http");
const fs = require("fs");
const readfile = require("./readfile.js")

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            readfile.writeHtml("./index.html", res)
            break;

        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            readfile.writeHtml("./about.html", res)
            break;

        case "/contact-me":
            res.writeHead(200, { "Content-Type": "text/html" });
            readfile.writeHtml("./contact-me.html", res)
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            readfile.writeHtml("./404.html", res)
            break;
    };
}).listen(8080);