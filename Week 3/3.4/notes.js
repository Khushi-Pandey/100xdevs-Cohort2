const jwt = require('jsonwebtoken');

// decode, verify, generate

const value = {
    name: "harkirat",
    accountNumber: 122134345
}

// sign and not generate
// const token = jwt.sign(value, "secret");
// console.log(token);

// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjIxMzQzNDUsImlhdCI6MTcwODY4NzA2OX0.gJtLuPN4N3e-S1YdK6VNDEmnUduke6_xX2aXJnFpz-0", "secret");

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjIxMzQzNDUsImlhdCI6MTcwODY4NTYwNH0.m77IG-xjtHwJyHo4NI_5Efoh_4yTSTy8wFOK1HevqPg", "secret")

console.log(verifiedValue);

// this token has been generated using this secret, and hence this token can only be verified using this secret.
// this is your chequebook
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjIxMzQzNDUsImlhdCI6MTcwODY4NTYwNH0.m77IG-xjtHwJyHo4NI_5Efoh_4yTSTy8wFOK1HevqPg