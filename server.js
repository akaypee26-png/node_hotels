const express = require('express');
//const { functions } = require('lodash');
const app = express();
const db = require('./db');    
require('dotenv').config(); 

const bodyParser = require('body-parser');
app.use(bodyParser.json());   

const PORT = process.env.PORT || 3000;
//const MenuItem = require('./models/MenuItem');

//=======================MIDDLE WARE=========================

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleDateString()}] Request made to : ${req.originalUrl}`);
    next();
}

//const { result } = require('lodash');
app.use(logRequest);
app.get('/', function (req, res){
    res.send('Welcome To My Hotel')
})

const Personroutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/person', Personroutes);
app.use('/menuitem', menuItemRoutes);



app.listen(PORT, ()=>{
    console.log('Listning on port 3000')
})





