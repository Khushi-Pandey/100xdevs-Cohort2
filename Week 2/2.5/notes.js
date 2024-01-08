// if you want to expose this logic to the world? that is where HTTP comes into the picture. It lets you create a ~hospital where people can come and find you
// HyperText Transfer Protocol: a protocol that lets you transfer data from one place to another
// suppose your code is Doctor logic

// Q: How do I expose my doctor functionality to other people?
// -> By creating an HTTP Server

// Q: How do I create an HTTP Server?
// -> Express

// Express is just the name of a library that lets u create an http server same as fs

// make sure whenever you're sending, send back a string and not number because it might think it's a status code
// res.send(ans.toString());

// Request methods
// 1. GET - Going for a consultation to get a check up
// 2. POST - Going to get a new kidney inserted
// 3. PUT - Going to get a kidney replaced
// 4. DELETE - Going to get a kidney removed

// creating an http server
// using express
// is it node default library like fs => no

const express = require("express");
// have to install it locally by =>  npm install express   <= in terminal

const app = express();    //creating clinic

function sum(n) {
    let ans = 0;
    for(let i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

// req, res => request and response
app.get("/", function(req, res){
    // throw new Error("asdsasd");
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your ans is: " + ans);
})

// sending query parameter => http://localhost:3000/?n=3&a=1  <= after question mark separate them by &

// 404 : when there's no "/" route handler
// 200 : everything's fine
// 500 : throws error

app.listen(3000);   // doctor taking a room