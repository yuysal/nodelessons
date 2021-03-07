const fs=require('fs')

// fs.appendFile()    fs.writeFile()

fs.appendFile('demoNew.txt','Hello world!!!',(error)=>{
    if (error) {
        console.log(error);
    }
    console.log("Append Process Finished...");
})