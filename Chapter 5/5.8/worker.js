self.onmessage = function(event) {
    var messageFromMainScript = event.data;
    console.log("Received message from main script: " + messageFromMainScript);
    
    // Perform time-consuming task
    var result = "Task completed!";
    
    // Send the result back to the main script
    self.postMessage(result);
};