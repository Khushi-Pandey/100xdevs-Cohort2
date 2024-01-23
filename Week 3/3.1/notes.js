// the usecase of middlewares is usually to do pre checks
// In real world, pre checks are two types-> either "authentication" or "input validation"
// these two pre checks usually happen before your actual logic kicks in

const express = require('express');

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  
  if(username!="khushi" || password!="pass") {   // if(!(username === "khushi" && password === "pass"))
    res.status(400).json({"msg": "Somethings up with your inputs"})
    return
  }

  if(kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your inputs"})
    return 
  } 
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })

});

app.listen(3000);

// dumb way of input validation

// Question: what if I tell you to introduce another route that does Kidney replacement, inputs need to be the same 
// Ugly soln: Create a new route, repeat code

// When you know you need to these pre-checks then you move those checks to some other place which is called middlewares

// express lets you chain through middlewares using 3rd param 'next'.
function userMiddleware(req, res, next) {
  if(username != 'harkirat' && password != "pass") {
    res.status(403).json({
      msg: "Incorrect inputs"
    });
  } else {
    next();
  }
};

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else{
    next();
  }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res, next){
  console.log('hi from req1');
  next()
}, function(req, res) {
  console.log('hi from req2');
})