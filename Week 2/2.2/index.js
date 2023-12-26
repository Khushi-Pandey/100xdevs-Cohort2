// Step 1. npm init -y        // run this in terminal

// const fs = require("fs");    //fs come built-in with Node.js
//const express = require("express"); // this u will have to bring/import from the internet to your machine

// Step 2. npm install express    (to bring express lib. locally onto my machine)

// creating http server:
//const app = express();

// express hello world program (copied from google):
const express = require('express')
const bodyParser = require("body-parser");
require('dotenv').config();
// const http = require("http") // nodejs provides this module out of the box to create http server
//Express is a higher-level framework built on top of the HTTP module
const app = express()  // initialises an instance of express
const port = process.env.PORT || 3000   //gives an env variable like we can define a port in terminal-> set PORT=3005 (in win)     export PORT=3005(in case of linux/mac)
//middlewares
app.use(bodyParser.json({}));     //same as-> app.use(express.json());

// app.get('/route-handler', function(req, res) {
//     // headers, body, query parameters
//     // do machine learning model
//     res.json({
//         name: "khushi",
//         age: 21
//     })
// })

// fs.readFile("path", "utf-7", ())
/* app.post('/', (req, res)  => {
    // console.log(req.headers["authorization"])
    console.log(req.body);
    res.send('Hello World!')
})  */

// app.get('/', (req, res) => {
//     console.log(req.body);
//     res.send("<b>hi there</b>")
// })

 app.post('/backend-api/conversation', function(req, res) {
    // run a machine learning model
    // res.send('Hello World!')
    const message = req.query.message;
    // const message = req.body.message;
    console.log(message);
    res.json({
        output: "2 + 2 = 4"
    })
  })  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
// app.listen(3001)



/* USE this in terminal to restart the server automatically->
npx nodemon index.js
and not-> node index.js //again and again
*/

//HTTPS port -> 443


// create a todo app that lets users store todos on the server