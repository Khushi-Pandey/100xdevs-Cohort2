/// Map, filter -> helper functions for array

// Q: given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

/// solution:-
// const newArray = [];

// for(let i = 0; i<input.length; i++) {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

/// other solution using map:-
// function transform(i) {
//     return i * 2;
// }

// const ans = transform(2);
// console.log(ans);

// const ans = input.map(transform);

const ans = input.map(function (i) {
        return i * 2;
    });
console.log(ans);

// assignment: create a map function that takes 2 inputs- an array and a transformation callback/fn and transforms the array into a new one using the transformation fn
// create a map fn that takes an array and a transform fn as input and returns the transformed array as output
let arr = [1, 2, 3, 4, 5];

const map = (arr, fn) => {
    const transformedArr = [];
    for(let i=0; i<arr.length; i++) {
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
};

console.log(map(arr, (x) => x * 2))
