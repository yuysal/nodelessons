const fs = require('fs')

fs.unlink('demoNew.txt',(err)=>{
    if (err) {
        throw err;
    }
    console.log("File was deleted.");
})