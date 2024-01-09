// map, filter, arrow fns

/// arrow fns -> another way to write a function

function sum(a, b) {
     return a + b;
}

const sum = (a, b) => {
    return a + b;
}

app.get("/", (req, res) => {

})

app.get("/", function(req, res) {

})

const ans = sum(1, 2);
console.log(ans);