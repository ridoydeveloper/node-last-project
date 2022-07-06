const dotenv = require('dotenv').config();
const path = require('path')
const colors = require('colors');
// const { request } = require('express');
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoDBConnect = require('./config/db');



//body data


app.use(express.json());
app.use(express.urlencoded({extended : false }));


//enviroment variable

const PORT = process.env.SERVER_PORT || 5000;

//mongo server connection
mongoDBConnect()



//ejs setup 
app.set("view engine" , "ejs");
app.set("layout", 'layouts/app');

app.use(expressLayouts);

//static folders

app.use('/assets' , express.static(path.join(__dirname, '/assets')))



// router

app.use('/student' , require('./routes/studentRoute'));
















// server listen

app.listen(PORT , () => console.log(`server is running on port ${PORT}`.bgGreen.black));


