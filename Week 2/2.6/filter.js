// filtering
// what if I tell u, given an input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5]

// ans:-
// const newArr = [];
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);


const ans = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

const arr1 = ["khushi", "shweta", "sapna"];

const ans1 = arr1.filter((n) => {
    if (n.startsWith("k")) {
        return true;
    } else {
        return false;
    }
});

console.log(ans1);


// what is 'startsWith'?
// a helper function for string class
console.log("khushi".startsWith("k"));