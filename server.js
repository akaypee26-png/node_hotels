const express = require('express');
//const { functions } = require('lodash');
const app = express();
const db = require('./db');     
const bodyParser = require('body-parser');
app.use(bodyParser.json());   

//const MenuItem = require('./models/MenuItem');


//const { result } = require('lodash');

app.get('/', function (req, res){
    res.send('welcome to our hotel...')
})

const Personroutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/Person', Personroutes);
app.use('/MenuItem', menuItemRoutes);



app.listen(3000, ()=>{
    console.log('Listning on port 3000')
})





