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

// one another popular middleware is to calculate the number of requests
let numberOfRequests = 0;
function calculateRequests(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}

app.get("/health-checkup", calculateRequests, function(req, res) {

});

app.get("/health-checkup2", calculateRequests, function(req, res) {

});

// app.use in middlewares->
let numberOfRequest = 0;
function calculateRequests(req, res, next) {
  numberOfRequest++;
  console.log(numberOfRequest);
  next();
}
app.use(calculateRequests);  // purpose is that any other route coming after this will have this middleware added

app.post("/health-checkup", function(req, res){

})

// Assignment-> find the average time your server is taking to handle requests


// input validation
app.use(express.json())

app.post("/health-checkup", function(req, res) {
  // kidneys = [1, 2] 
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});

// global catches   ->    which is another middleware that takes 4 inputs & not 3, it's always at the end after all the routes and everything
app.use(function(err, req, res, next) {
  res.json({
    msg: "Sorry something is up with our server"
  })
})


/* post req on postman in body
{
  "kidneys": [1, 2]
}
*/
