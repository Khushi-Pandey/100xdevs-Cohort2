// Sync func: One thing at a time
// Async func: multiple things are context switching with each other(happens in parts) things are parallelize-d

// delegating and context switching helps to be async

// 1000ms = 1sec
// setTimeout- a global (pre-made)func(or webAPI), running a specific fn after some duration(being in ms)

// async can be converted to sync by "busy wait" (create a functon like a for loop(i=1 to 1000000) that keeps incrementing value of say "a")
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    console.log(findSum(100));
  }
  
  //busy waiting
  function syncSleep() {
    let a = 1;
    for(let i=0; i<1000000000; i++) {   // this is a very expensive operation
      a++;
    }
  }
    
  syncSleep();
  findSumTill100();
  // setTimeout(findSumTill100, 1000)  //setTimeout(() => {findSum(100);}, 1000); //setTimeOut(function timeout() {console.log("hi")}, 500) //When using setTimeout, it's important to pass a function reference (without parentheses) as the first argument, rather than directly calling the function. else we can pass an anonymous fn also(timeout here is anonymous even tho it has name because it's not defined outside this (setTimeOut)function scope)

  console.log("hello world");   //busy wait can defer(delay/postpone) printing this

// common async functions:
// setTimeout - sets time that restricts for some period of time from running while executing other lines of code
// fs.readFile - to read a file from your fileSystem
// Fetch - to fetch some data from an API endpoint

const fs = require('fs');
// filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data);
});

console.log("hi there")

/* javascript architecture:
1. call stack 
2. web Apis(not a part of original js spec. and is handled by the browser) 
3. callback queue 
4. event loop(that circle thing with arrow) : what it does? after the thread is free, it is idle, checks the callback queue that what's the latest thing to be put back on the stack and if there is an async task, it can be pulled */

// in case of multiple async fn's, the one that executes first goes to queue first and reach stack first even if it is present later in the code

// Promises: are syntactical sugar that make the code slightly more readable
// promise is just a class that makes callbacks and async functions slightly more readable. whenever u create it, u need to pass in a func as the first arg which has resolve(not a keyword) as the first arg

// aync/await: await must be inside an async function, await gets the value directly no promise no callback