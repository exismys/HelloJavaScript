const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);

    if (parsedURL.query.filename) {
        let filename = parsedURL.query.filename;
        fs.readFile(`${__dirname}/${filename}`, (error, data) => {
            if (error) {
                res.end("File does not exist!");
            } else {
                res.write(data);
                res.end();
            }
        })
    } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<form><input type="text" name="number"><input type="text" name="num"><input type="submit" value="Process"></form>');
        res.end();
    }
}).listen(8000);