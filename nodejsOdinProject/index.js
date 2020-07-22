const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile("./index.html", (err, data) => {
                if (err) throw err;
                res.write(data);
                return res.end()
            });
            break;

        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile("./about.html", (err, data) => {
                if (err) throw err;
                res.write(data);
                return res.end()
            });
            break;

        case "/contact-me":
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile("./contact-me.html", (err, data) => {
                if (err) throw err;
                res.write(data);
                return res.end()
            });
            break;

        default:
            fs.readFile("./404.html", (err, data) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                if (err) throw err;
                res.write(data);
                return res.end()
            });
            break;
    };
}).listen(8080);