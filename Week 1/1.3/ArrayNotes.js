// push - adds element at the end of array
// pop - removes element from the end
// shift = removes from the start
// unshift - adds element at the start

const initialArray = [1, 2, 3];

initialArray.push(0);
console.log(initialArray)

//concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

// diff b/w concat & push - in push the argument is a value and not an array

// foreach() is a method that expects a function as argument, operates on array and logs it
function logThing(str) {
    console.log(str);
}

// [1, 2, 3]
initialArray.forEach(logThing);