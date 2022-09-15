const connect = require('connect');
const app = connect();
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function handleBye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye-bye World');
};

app.use("/hello", helloWorld);
app.use("/bye", handleBye);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
