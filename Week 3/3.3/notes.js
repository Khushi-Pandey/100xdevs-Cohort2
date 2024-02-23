const express = require('express');

const app = express();

// function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age) {
//     if(age>=14) {
//         return true;
//     } else{
//         return false;
//     }
// }

//better way to introduce ticket checker -> Middleware
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age>=14) {
        next();
    } else{
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}

// when every route has to use this
app.use(isOldEnoughMiddleware); // but it will only work for routes below this

app.get("/ride2",isOldEnoughMiddleware, function(req, res) {
    res.json({
      msg: "You have successfully riden the ride 2"
    }) 
  })
  
  app.get("/ride1", function(req, res) {
    res.json({
      msg: "You have successfully riden the ride 1"
    })
  })

app.listen(3000);