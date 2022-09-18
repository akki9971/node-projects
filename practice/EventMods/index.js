const EventEmitter = require('events')
const event = new EventEmitter();

event.on('hey', () =>{
    console.log('hey this is event emitter defines first time');
})
event.on('hey', () =>{
    console.log('hey this is event emitter defines second time');
})
event.on('hey', (x, y) =>{
    console.log('hey this is event emitter defines third time '+x+' '+y);
})
/**
 *@Event_declaration  we can declare event once or  multiple times 
 *@Event_emittng      once the event emits ,it  executes every declaration 
 *@Parameterise_event and we can pass arguments to the event on emittion and handle those in callback's parameters
 */
event.emit('hey', "with", 'Parameters and arguments')