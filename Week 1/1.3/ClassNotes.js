// class: they let you put a bunch of properties of a certain type together
// a structure of something that's reusable and used in multiple places

// no return value in a function gives undefined if we log the function call
const dog = {
    name: "doggie",
    legCount: 4,
    speaks: "bhow bhow",
};

const cow = {
    name: "cow",
    legCount: 4,
    speaks: "moo",
};

function printStr(animal) {
    console.log("animal " + animal["name"] + " " + animal["speaks"]);
    // return("animal " + animal["name"] + " " + animal["speaks"]);
}
// console.log(printStr(dog));      - gives undefined because function does not have a return value
// console.log(printStr(cow));      -  undefined

printStr(dog)     // won't give undefined because I'm not logging function instead just calling it
printStr(cow)

// class is a architectural blueprint for objects like delhi, mumbai, rajasthan. which can be used again for diff objects