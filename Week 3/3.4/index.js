const jwt = require('jsonwebtoken');

const value = {
    name: "harkirat",
    accountNumber: 122134345
}

// sign and not generate
const token = jwt.sign(value, "adaad");
console.log(token);