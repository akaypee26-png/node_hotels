const express = require('express');
//const { functions } = require('lodash');
const app = express();
const db = require('./db');    
require('dotenv').config(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());   
const PORT = process.env.PORT || 3000;
//const MenuItem = require('./models/MenuItem');


//const { result } = require('lodash');

app.get('/', function (req, res){
    res.send('welcome to our hotel...')
})

const Personroutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/person', Personroutes);
app.use('/menuitem', menuItemRoutes);



app.listen(PORT, ()=>{
    console.log('Listning on port 3000')
})





