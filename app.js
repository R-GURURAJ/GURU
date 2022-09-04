// import framework
const express = require('express')
let exp = express();
const mongoose = require('mongoose');
// const index = require('./public/html/index.ejs')

// import routes
const post = require('./routes/post');
exp.set('view engine', 'ejs');


const app = express()
const port = 3000

// main route
app.get('/', (req, res) => res.send('Hello world'))

// sub route
app.use('/post', post);
// app.use('/index', index);

mongoose.connect("mongodb://localhost:27017/", () => console.log("connected to db !!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))