const mongoose = require('mongoose');
require('dotenv').config(); 

 //const mongoURl = 'mongodb://localhost:27017/hotels';
 //const mongoURl = 'mongodb+srv://Helloworld:helloworld@cluster0.a8hf5qg.mongodb.net/hotel';
                
 const mongoURl = process.env.MONGODB_URL;

// console.log(mongoURl);

 mongoose.connect(mongoURl);
//    , {
//     useNewURLParser: true,
//     useUnifiedTopology:true
//  }


 const db = mongoose.connection;

 db.on('connected', () =>{
   //console.log("DB Name:", mongoose.connection.name);
//console.log("Host:", mongoose.connection.host);
    console.log('Connected to MongoDB server', mongoURl)
 });

  db.on('error', (err) =>{
    console.error('MongoDB connection error', err)
 });

  db.on('disconnected', () =>{
    console.log('MongoDB Disconnected')
 });
