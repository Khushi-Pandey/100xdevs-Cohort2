// class: they let you put a bunch of properties of a certain type together
// a structure of something that's reusable and used in multiple places

// no return value in a function gives undefined if we log the function call
const doggo = {
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

class Animal {
    constructor(name, legCount, speaks) {    // created function here named constructor
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// don't create an animal like this:
let dog1 = {
    name: "dog",
    legCount: 4,
    speaks: "bhow bhow"
} 

// do this:
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("dog", 4, "meow");