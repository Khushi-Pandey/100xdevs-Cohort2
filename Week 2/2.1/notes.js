// asynchronous:
/* js thread doesn't have access to everything immediately
there are some tasks it needs to wait for -
1- reading a file
2- sending a network req
3- a deliberate timeout
*/

// web Apis: extra fns that browser(nodejs also does) provides(handled by c++ code mostly and in case of fs.readFile OS handles) that isn't a part of js spec.

const fs = require("fs"); // have to import fs library bcoz it's not a common usecase so it is good for it to be not present in the global scope which is available everywhere

fs.readFile("a1.txt", "utf-8", function(err, data) {
    console.log(err);  //if file doesn't exist(status code: ENOENT) say we're accessing "a1.txt" but file is "a.txt"
    console.log(data); //will give undefined
})

// ENOENT is an error that means "Error No Entity". It occurs when a specified path (file or directory) does not exist in the filesystem.

// assignment(medium)
const fs = require("fs");
fs.readFile("a1.txt", "utf-8", function(err, data) {
    data = data + " khushi was here";
    fs.writeFile();
});

// how to write your own async fn? ->   "wrap around that async fn"
const fs = require("fs");

function putCopyrightToFile(cb) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        data = data + " copyright 2020 khushi pandey";
        fs.writeFile(a.txt, function () {
            cb();
        });

    });
}

putCopyrightToFile(function() {
    console.log("copyright has been put");
})

// callback hell: just ugly code (unnecessary indentation)
// create a fn that logs something after 1s & then waits for 2secs to log another thing(inside the first timeOut)
// indendated code->
setTimeout(function() {
    console.log("hi there");

    setTimeout(function() {                    // can be done one after the other without nesting but let's say we have to do this way
        console.log("inside the second one");

            setTimeout(function() {
                console.log("inside third one");
            }, 3000);
    }, 2000);

}, 1000);  

//how can we do this without losing async properties as in when waiting js can perform other lines of code
waitFor(1000);
console.log("hi there");
waitFor(2000);
console.log("hi there");
waitFor(3000);
console.log("hi there");
// by using promises

// Promises: to have neater code (syntactical sugar)
// what is a promise? it is just another class in js like Date class:
const d = new Date(); //instance of Date class
console.log(d.getMonth() + 1);  //+1 bcoz indexing starts from 0 to 11

//promisify this async fn 
//returned undefined(no return statement but does have a setTimeOut)
function myOwnSetTimeout(callback, duration) {
    setTimeout(callback, duration);
} //this fn uses callback 

// returning a promise
function promisfiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve) {

    });  
    return p;
}

// promisified fn call:
const ans = promisfiedMyOwnSetTimeout(1000);
ans.then(function() {
    console.log("timeout is done");
});

//fn call:
myOwnSetTimeout(function() {
    console.log("after settimeout");
}, 1000)


// when do we need a async fn? 
/*when u have to:
 1. do a network call
 2. sleep/wait for some time
 3. read a file
 4. database call */
 // how much async vs sync? 5% => async code,  do away with callbacks but good to know promises   otherwise 95% sync fns are used

/*why promises?
 callbacks => callback hell
 promises => promise chaining, async await */


// what does resolve do actually?
// The purpose of the resolve function is to fulfill the Promise with a resolved value, that value is passed to ans variable in case of await and ans as arg in case of .then()
//let ans = await fucn() or .then(func(ans))  here ans is the value that is received from resolve

function sum(a, b) {
    return new Promise(function(resolve) {
        resolve(a + b);
    })
}

sum().then(function sum(ans) {
    console.log(ans);
})


// how resolve is similar to callback fn:
function sumOfSquares(a, b, fn) {
    let value1 = a * a;
    let value2 = b * b;
    fn(value1 + value2);  //same as calling resolve
}

// calling a non promisified fn
sumOfSquares(1, 2, function(value) {
    console.log(value);
})

// calling a promisified async fn
sumOfSquares(1, 2).then(function(value) {
    console.log(value);
})

// when passing a fn as arg don't use () because this means you're calling it which actually passes the value and not the function, ex:
setTimeout(sum(1, 2), 1000); // here this actually means-
setTimeout(3, 1000); // but we don't want to pass the value or give fn call but we want to simply pass in a fn
setTimeout(function() {    // so what you can do is define a fn which calls sum(1, 2)
    sum(1, 2)
}, 1000);

// let's dry run promise:
console.log("at the top 1");
function promisifiedTimeout() {     //defining
    console.log("function called 3");
    return new Promise(function(resolve) {
        console.log("inside promise callback 4");
        setTimeout(function() {
            console.log("setTimeout called 5");
            resolve("done baby! I am burnt out.");
        }, 5000);
    });
}
console.log("in the middle 2");     
promisifiedTimeout().then(function(value) {        //calling
    console.log("promisified then 6");
    console.log(value);
});

// promise chaining:
p().then(function() {
    return newFunctionCall()
}).then(function() {
    return otherFn()
}).then(function() {

})