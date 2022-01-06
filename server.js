const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const pageRoute = require('./routes/page')
const userLogin = require('./routes/data')

const app = express()
dotenv.config()

//connect database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useunifiedtopology: true
})
.then( () =>  console.log("MongoDB connected"))
.catch( (err) =>  console.log(`Erreur de connection : ${err}`))

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');


app.use(cookieParser('secret'))
app.use(session({ 
    cookie: { maxAge: null }, 
    secret: 'secret', 
    saveUninitialized: true,
    resave: true 
}))


app.use((req,res,next)=>{
    res.locals.message = req.session.message
    delete req.session.message  
    next()
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())

//routes

app.use('/',pageRoute)
app.use('/auth', userLogin);

//define port
const PORT = process.env.PORT 
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});