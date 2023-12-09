// a set of statements that performs a task or calculates a value
// It should take some input and return an output where there is some obvious relationship b/w the input and the output.

// fundamental principle in Coding - DRY (Don't Repeat Yourself)

// callback functions: passing functions as arguments (functional arguments)

// step 1- can you call one function inside another function

// callback can also be logged like inside function log the func that is being passed as argument

// anonymous function: a func that does not have a name

function sumOfSomething(a, b, callback) {
    console.log(a);
    console.log(callback);  // logging the callback function
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2
}

const ans = sumOfSomething(2, 2, function (n) {   // anonymous func does not have to be named and can directly write args but can u put a name? yes but should u? probably not coz i don't need to call it from outside like somewhere else
    return n*n*n
})
console.log(ans);