audioElement.addEventListener("loadedmetadata", function() {
    console.log("Audio duration: " + audioElement.duration + " seconds");
});

videoElement.addEventListener("loadedmetadata", function() {
    console.log("Video duration: " + videoElement.duration + " seconds");
});