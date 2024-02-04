// better way to do input validation -> Zod is one of the libraries for that {do-> npm install zod} 
const express = require('express');
const zod = require('zod');

const app = express();

const schema = zod.array(zod.number());
//
// {
//   email: string => email
//   password: atleast 8 letters
//   country: "IN", "US"
// }

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number())
})

app.use(express.json())

app.post("/health-checkup", function(req, res) {
  // kidneys = [1, 2] 
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success) {
    res.status(411).json({
      msg: "input is invalid"
    })
  } else{
    res.send({
      response
    })
  }
  
});

app.listen(3000);




const zod = require('zod'); // zod can be used independent of express, it's a validation library

// if this is an array of numbers with atleast 1 input, return true, else return false

function validateInput(arr) {
  // if(typeof arr == "object" && arr.length >=1 && typeof arr[0] == "number") {}
  const schema = zod.array(zod.number());

  const response = schema.safeParse(arr);
  console.log(response);
}

validateInput(["1", 2, 3]);


//
// {
//   email => string => should look like email
//   password => should have 8 letters
// }
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

//either call it like this
validateInput({
  email: "zjkfabjkf@gmaol.cno",
  password: "29472946097"
});
// or via http server like this
app.post('/login', function (req, res) {
  const response = validateInput(req.body);
  if(!response.success) {
    res.json({
      msg: "your inputs are invalid"
    })
    return;
  }
})