// Authentication ->

// 1. Hashing: One way, hashed password is stored in the DB. when user enters password, the Backend re-converts it into the gibberish and check if it matches with the db

// 2. Encryption: Two way, can be converted back(decrypted) to the original string provided you have a key

/* 3. JSON Web Tokens: only works for json inputs ex- { x: y } & gives more structured data(on high level it gives you a long string). It takes json onject and creates a token at the end (the long string is token). if you have JWT it can be converted back to original object (jwt.io website paste the token there and you can see the object) but can only be Verified by chatgpt backend servers using some function with the password used to hash the object
suppose-
{json data} --pass into a function--> jwt.incode (has a password) --get back--> long string

jwt/the long string --pass to a function with the password--> jwt.verify --only then I get-->  {the original object}

anyone can decode but whoever wants to verify needs this password. for ex- when you sign on the cheque anyone can see the signature but only the bank can verify it.
*/

/* 4. Local Storage: inspect->applications->local storage
something like this relayed everytime. any request going out will carry this token. and when you log out they remove the token so I'm no longer sending the token while logged out  */
const response = await fetch("https://fakerapi.it/api/v1/persons", {
    headers: {
        "Authorization": localStorage.read("token")
    }
});