// node myFile.js


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate?
  // check two: Any pending OS tasks? (Like server listening to port)
  // check three: Any pending long running operations? (like fd module)

  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;

}

// dummy event loop
//entire body executes in one 'tick'
while(shouldContinue()){
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause execution. Continue whenever a
  // - new pendingOSTask is done
  // - new pendingOperation is done
  // - timer is about to complete

  //4) Look at pendingTimers. call any setImmediate
  //5) Handle any 'close' events
}



// exit back to terminal