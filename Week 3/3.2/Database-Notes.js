// NoSQL-> MongoDB is schemaless (can literally put anything)

/* In real world, a basic architecture looks like this:
User hits the backend
Backend hits the database
User doesn't have access to the database/ can't talk to the DB
 -----------             ---------------------------------
|           |            |   ------------   ----------   |
|           |            |   |          |   |        |   |
|  Browser  |  ----------|-->| Backend  |-->|Database|   |
|           |            |   |          |   |        |   |
|           |            |   ------------   ----------   |
 -----------             ---------------------------------    
*/

// How does the backend connect to the database?
// Using Libraries!
//  1. Express lets u create an HTTP server
//  2. JsonWebTokens library lets you create jwt's
//  3. Mongoose lets you connect to your database

const mongoose = require('mongoose');
const express  = require('express')
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://admin:EiHjoSJiVnxFvsIw@cluster0.uou6qx4.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signup', async function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ username: username });
  // CRUD => create, update, delete, Read
  
  if (existingUser) {
    return res.status(400).send('Username already exists');
    }
  
  // either create this way:
  // await User.create({name, email: username, password});

  // or this way:
  const user = new User({ 
    name: name, 
    email: username, 
    password: password 
  });

  user.save();
  res.json({
    "msg": "User created successfully"
  })
})

app.listen(3000)