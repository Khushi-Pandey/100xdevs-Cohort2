// Sync func: One thing at a time
// Async func: multiple things are context switching with each other(happens in parts) things are parallelize-d

// delegating and context switching helps to be async

// 1000ms = 1sec

// async can be converted to sync by "busy wait" (create a functon like a for loop(i=1 to 1000000) that keeps incrementing value of say "a")

// common async functions:
// setTimeout - sets time that restricts for some period of time from running while executing other lines of code
// fs.readFile - to read a file from your fileSystem
// Fetch - to fetch some data from an API endpoint


// Promises: are syntactical sugar that make the code slightly more readable
// promise is just a class that makes callbacks and async functions slightly more readable. whenever u create it, u need to pass in a func as the first arg which has resolve(not a keyword) as the first arg