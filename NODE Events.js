var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  alert("I hear a scream!");
};
var myEventHandler1 = function () {
  alert("I hear a scream11111!");
};

//Assign the eventhandler to an event:
eventEmitter.on("scream", myEventHandler);
eventEmitter.on("scream1", myEventHandler1);

//Fire the 'scream' event:
eventEmitter.emit("scream");
eventEmitter.emit("scream1");
