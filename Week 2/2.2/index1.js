// just less cluttered code

const express = require('express')   // import express
const app = express()         // call express func and get it in app
console.log(typeof app); // can log app
const port = process.env.PORT || 3001

app.get('/', function(req, res) {
  console.log(req.headers["authorization"]);
  setTimeout(function() {
    res.status(401).send('Hello World!')
  }, 1000)
  })  

app.listen(port, () => {    // this is what starts the http server
    console.log(`Server is running on port ${port}`);
  })

  // if there is no listen then it will be like u defined a fn but never called it so here u defined the routes, u never listened