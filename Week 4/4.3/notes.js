// Mongo deep dive

// database -> It is a place where data is stored persistently.
// http servers are transient

// ORM : basically the library to talk to a database. ex- prisma, mongoose

// In Mongoose first you have to define a schema

// MongoDB(schema less) is in stark contrast with SQL databases(which are schema based, you have to upfront tell the structure of your data)

// SQL databases like MySQL and postgres don't let you put transitive nested objects like mongodb allows complex objects like arrays

/**
week 3 asgmt. ->
- JWT saves you a database call by not checking username and password
- Middlewares do 3 things:
    - forwards to another function/route
    - stops the flow
    - passes some values to another function/route
 */