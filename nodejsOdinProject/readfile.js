const fs = require("fs");

exports.writeHtml = (filepath, res) => {
    fs.readFile(filepath, (err, data) => {
        if (err) throw err;
        return res.end(data);
    });
} 