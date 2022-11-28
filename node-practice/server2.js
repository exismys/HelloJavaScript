const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);

    if (parsedURL.query.number != undefined || parsedURL.query.num != undefined) {
        let number = parsedURL.query.number;
        let num = parsedURL.query.num;
        res.end(`Multiplication of numbers is: ${number * num}`);
    } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<form><input type="text" name="number"><input type="text" name="num"><input type="submit" value="Process"></form>');
        res.end();
    }
}).listen(8000);