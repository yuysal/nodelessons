const fs = require('fs')
const http = require('http')

//GET - POST - PUT - DELETE
// https://domainname.com/login?user=yourname&password=12345
const myCustomServer= http.createServer((request,res)=>{
    fs.readFile('test.html',(err,data)=>{
        if (err) {console.log(err);}
        res.end(data);
    })
})

myCustomServer.listen("3001")