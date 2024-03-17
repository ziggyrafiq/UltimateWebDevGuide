var worker = new Worker("worker.js");

worker.onmessage = function(event) {
    console.log("Worker says: " + event.data);
};

worker.postMessage("Hello from the main script!");