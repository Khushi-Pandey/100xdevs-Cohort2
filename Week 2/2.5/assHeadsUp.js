// http-ify
// fs.readFile("a.txt", function(err, data)) {
//     console.log(data);
// }

const express = require("express")
const fs = require("fs");

const app = express();

// after /files any route should be accessible
app.get("/files/:fileName", function(req, res) {
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data) {
        res.json({
            data
        });
    })
});

app.listen(3000)