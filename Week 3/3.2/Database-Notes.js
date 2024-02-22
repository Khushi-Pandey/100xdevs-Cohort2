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
//  2. JsonWebTokens library lets you create jets
//  3. Mongoose lets you connect to your database