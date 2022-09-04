const express = require('express')
let exp = express();
const Router = express.Router();
const Post = require('../models/post_db');
// const index = require('../public/html/index.ejs')
console.log(__dirname);
// var fs = require('fs');
// var data = fs.readFileSync(index,'utf-8');


// exp.set('view engine', 'ejs');
// const app = express()
// const port = 3000

Router.get('/', (req, res) => res.send('Hello i am post !!'));

Router.get('/index', (req, res) => res.sendFile('/home/guru-rio/Documents/projects/monggg/public/html/index.html'));

Router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = Router;