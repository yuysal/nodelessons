const events = require("events");
const eventEmitter = new events.EventEmitter();

/**Create a event */
eventEmitter.on("sayName", (text) => {
  console.log("My name: Clotilde-",text.age,text.surname);
});

/**Create a event for trigger once */
/*eventEmitter.once("sayName", () => {
    console.log("My name: Clotilde");
  });*/

/**Trigger a event */
eventEmitter.emit("sayName",{age:12,surname:'Tommy'}); 

