const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const pageRoute = require('./routes/page')

const app = express()
dotenv.config()

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())

//routes

app.use('/',pageRoute)

//define port
const PORT = process.env.PORT 
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});
