// Throwing and catching errors in js

// when an exception is raised the process exits.
// But you might want the program to still continue executing. That is where you can try catches


try {
    let a;
    console.log(a.length);
    console.log("hi there from inside");
} catch(e) {
    console.log("inside catch statement");
}

console.log("hi there");