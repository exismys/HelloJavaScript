const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log(`Listening to http://localhost:3000`);
});

app.get("/", (req, res) => {

    if (req.query.number) {
        let number = req.query.number;
        let num = req.query.num;
        // let fact = 1;
        // for (let i = 2; i <= number; i++) {
        //     fact = fact * i;
        // }
        res.send(`Multiplication of the number is: ${num * number}`);

    } else {
        res.sendFile(__dirname + "/index.html");
    }
    
});