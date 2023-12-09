// JavasScript Object Notation

/* const users = {
    name: "harkirat",
    age: 24,
    gender: "male",
} */

console.log(users["name"])

// can pass the above data by converting it into a string
const users = '{name: "harkirat", "age": 24, "gender": "male"}'  // had to put string in a certain fashion
// and then can parse this string into object

console.log(users["name"]) // can't do this will give undefined because it is no longer an object but a string
console.log(users[0]); // this can be done

/* u might want the user to know the shape of the data which is like name is this and age and gender is this but u can't send them a js object bcoz they'll not understand it, for that reason u'll need to interchange b/w a js object and a js string & for that u need this json class
 this gives 2 high level functions:     */
// JSON.parse
// JSON.stringify

const user = JSON.parse(users)
console.log(user["gender"]);

// stringify:
const user2 = {
    name: "rahul",
    gender: "male",
}

const finalString = JSON.stringify(user2)
console.log(finalString);    // console.log(finalString["name"]); - will print undefined bcoz it's a string now
console.log(user2["name"]);  // works bcoz it's an object