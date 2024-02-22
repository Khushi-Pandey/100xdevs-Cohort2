// Authentication ->

// 1. Hashing: One way, hashed password is stored in the DB. when user enters password, the Backend re-converts it into the gibberish and check if it matches with the db

// 2. Encryption: Two way, can be converted back(decrypted) to the original string provided you have a key

/* 3. JSON Web Tokens: only works for json inputs ex- { x: y } & gives more structured data(on high level it gives you a long string). It takes json onject and creates a token at the end (the long string is token). if you have JWT it can be converted back to original object (jwt.io website paste the token there and you can see the object) but can only be Verified by chatgpt backend servers using some function with the password used to hash the object
suppose-
{json data} --pass into a function--> jwt.incode (has a password) --get back--> long string

jwt/the long string --pass to a function with the password--> jwt.verify --only then I get-->  {the original object}

anyone can decode but whoever wants to verify needs this password. for ex- when you sign on the cheque anyone can see the signature but only the bank can verify it.
*/

/* 4. Local Storage: inspect->applications->local storage
something like this relayed everytime. any request going out will carry this token. and when you log out they remove the token so I'm no longer sending the token while logged out  */
const response = await fetch("https://fakerapi.it/api/v1/persons", {
    headers: {
        "Authorization": localStorage.read("token")
    }
});


// Assignment:

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // hard todo - try to use the find function in js
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
    // return a list of users other than this username
  res.json({
    users: ALL_USERS.filter(function(value) {
      if(value.username == username) {
        return false;
      } else {
        return true;
      }
    })
  })
});

app.listen(3000)