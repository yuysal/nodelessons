const express = require('express')
const myApp = express()

myApp.get('/',(req,res)=>{
    res.send('Hello world from ExpressJS...');
});

myApp.listen(3005,()=>{console.log('Express Server Running...')})