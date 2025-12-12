const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/save", (req, res) => {
    const data = req.body.data; // oddiy matn

    // log.txt ga yozish
    fs.appendFile("log.txt", data + "\n", (err) => {
        if (err) {
            return res.send("Yozishda xatolik bo'ldi");
        }
        res.send("log.txt ga yozildi");
    });
});

app.listen(3000, '0.0.0.0', () => console.log("Server ishga tushdi: http://localhost:3000"));
