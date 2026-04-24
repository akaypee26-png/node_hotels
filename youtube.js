
// function bca(){
//             console.log('aakash is calling a abc func sstep 3');
// }
// function abc(){
//         console.log('aakash is calling a abc func sstep 2');
//         bca();
// }
// const add = function(a,b){
//         var result = a+b;
//         console.log('result: '+result);
//         abc();
// }
// add(3,4);

//=====================================================================

// function bca(){
//     console.log('step 3');
// }

// function abc(){
//     console.log('step 2');
//     bca();
// }

// function add(a, b, callback){
//     var result = a + b;
//     console.log('result: ' + result);
//     callback();
// }

// add(3, 4, abc);

//=====================================================================

// function abc(){
//     console.log('step 2');
// }

// function add(a, b, callback){
//     var result = a + b;
//     console.log('result: ' + result);
//     callback();
// }

// add(3, 4, abc);
// ========================================================================
// var fs = require('fs');

// var os = require('os');
// var user = os.userInfo();

// console.log(user);
// console.log(user.username);

// fs.appendFile('abcd.txt', 'hudhud' + user.username + '\n' , ()=>{
//     console.log('file is creted')
// });


// console.log(os,fs);

//==============================================================================

// const notes = require('./notes.js');


// var age = notes.age;

// var result = notes.addnumber(age,10);

// console.log('your current age is ',age);
// console.log('result is now '+result);

//==============================================================================

// var a= require('lodash');
//  var d =["abc","abc","abc",1,1,1,2,2,2,"aaka",25,"kalali"];
// var f = a.uniq(d);
// console.log(f);


//==============================================================================


//import express from 'express'

// const app = express()

// app.get('/jj', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   //console.log('Server is running on http://localhost:3000')
// })


// const mongoose = require('mongoose');

// const ps = new mongoose.Schema({
//     name : {
//         type: string,
//         required: true 
//     }
// })

//D:\Data of D Drive\pendriveeeeee