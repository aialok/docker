const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

app.get("/home", (req, res) => {
    res.send("Welcome to the home page!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page!");
});

app.get("/json", (req, res) => {
    res.json({ message: "Hello, World" });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT} and this is changed`)
});
