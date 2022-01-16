const app = require("https-localhost")()
// app is an express app, do what you usually do with express
//test your ui app

const port=3000;


app.serve('public');

app.listen(port);