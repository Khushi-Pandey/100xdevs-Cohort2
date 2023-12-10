const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());

// epoch timestamp:
console.log("Time in milliseconds since 1970: ", currentDate.getTime());
 

function calculateSum () {
    let a = 0;
    for (let i = 0; i < 100000000; i++) {
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);
