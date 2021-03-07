//callback function
function sayFirst(text,callback) {
  setTimeout(()=>{
    console.log(text);
    callback();
  },2000);
}
function saySecond() {
  console.log("Second Bye...");
}
sayFirst("First Hello...", saySecond);