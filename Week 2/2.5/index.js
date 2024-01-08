// lets create an in memory hospital
// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const app = express();

// array of ojects
const users = [{
    name: 'John',
    kidneys: [{healthy: false}, {healthy: true}]
}]

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    
})

app.listen(3000);