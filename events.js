const event=require('events');

const EventEmitter= new event();

const handleAction = function(){
    console.log("performed the user action");
}

//assign the function on the action
EventEmitter.on('action', handleAction);

//fire the event
EventEmitter.emit('action');