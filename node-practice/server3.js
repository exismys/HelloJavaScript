const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log(`listening to http://localhost:3000`);
});

app.get("/", (req, res) => {
    if (req.query.filename) {
        const filename = req.query.filename;
        res.download(`${__dirname}/${filename}`);
    } else {
        res.sendFile(__dirname + "/file.html");
    }
});