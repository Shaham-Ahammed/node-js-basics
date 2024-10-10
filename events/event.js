// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

var event = require('events')
// all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object
var eventEmitter =  new event.EventEmitter()
;

var eventHandler = function(){
    console.log("started to scream");
}

//Assign the event handler to an event:
eventEmitter.on("scream",eventHandler);

// To fire an event, use the emit() method.
setInterval(() => {
    eventEmitter.emit("scream")
}, 3000);