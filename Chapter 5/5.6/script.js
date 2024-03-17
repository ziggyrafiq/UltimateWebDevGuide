var dragSource = document.getElementById("drag-source");
var dropTarget = document.getElementById("drop-target");

dragSource.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "Dragged Data");
});

dropTarget.addEventListener("dragover", function(event) {
    event.preventDefault();
});

dropTarget.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    dropTarget.innerHTML = "Dropped: " + data;
});