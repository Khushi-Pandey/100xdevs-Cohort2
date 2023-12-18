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

// Promises: to have neater code (syntactical sugar)
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