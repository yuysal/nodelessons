const viewNumber = () => {
  return new Promise((resolve, reject) =>{
    if (condition) {

    }else{
      reject("not Nice.");
    }
    
  })
}

viewNumber()
 .then((data)=>{console.log(data); return 2;})
 .then((data)=>{console.log(data); return 4;})
 .then((data)=>{console.log(data); return 6;})
 .then((data)=>{console.log(data); return 8;})
 .then((data)=>{console.log(data); return 10;})
 .catch((err)=>{console.log(err); return})