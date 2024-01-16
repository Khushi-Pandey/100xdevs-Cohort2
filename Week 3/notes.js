// the usecase of middlewares is usually to do pre checks
// In real world, pre checks are two types-> either "authentication" or "input validation"
// these two pre checks usually happen before your actual logic kicks in

const express = require('express');

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const kidneyId = req.query.kidneyId;

  if(!(username=="khushi" && password=="pass")) {   // if(username!="khushi" || password!="pass")
    res.status(400).json({"msg": "Somethings up with your inputs"})
  }


  if(username=="khushi" && password=="pass") {
    if(kidneyId==1 || kidneyId==2) {
      // do something with kidney here
      res.json({
        msg: "Your kidney is fine!"
      })
    } 
  }
  res.status(400).json({"msg": "Somethings up with your inputs"})
});