const express = require("express");
const app = express();
const path = require('path')



app.get('/' , (req , res)=>{
      res.send("hello world");
});
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'node_modules/three/build')));
app.use(express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.use('/xyz' , express.static(__dirname + '/public'));




app.listen(4321 , (req , res)=>{
    console.log("listening to 4321");
});