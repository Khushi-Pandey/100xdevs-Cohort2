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

// class is a (blueprint) or architectural map of a building for objects like delhi, mumbai, rajasthan. which can be converted into real objects multiple times (used again for diff objects)
// classes are good when u know that every animal will have for ex- speak a common function

class Animal {
    constructor(name, legCount, speaks) {    // created function here named constructor
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType() {             // static func is associated with the class itself & not the object, static is used when we want to create function without the initiation of objects
        console.log("Animal");
    }
    speak() {
        console.log("hi there " + this.speaks);
    }
}

console.log(Animal.myType());

// don't create an animal like this:
let dog1 = {
    name: "dog",
    legCount: 4,
    speaks: "bhow bhow"
} 

// do this:
let dog = new Animal("dog", 4, "bhow bhow");  // create object
let cat = new Animal("dog", 4, "meow");
cat.speak();  // call function on object