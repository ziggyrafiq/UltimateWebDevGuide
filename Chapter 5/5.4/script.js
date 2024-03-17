// Storing data
sessionStorage.setItem("sessionID", "12345");

// Retrieving data
var sessionID = sessionStorage.getItem("sessionID");
console.log("Session ID: " + sessionID);

// Removing data
sessionStorage.removeItem("sessionID");