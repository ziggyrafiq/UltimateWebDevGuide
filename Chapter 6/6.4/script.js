audioElement.addEventListener("play", function() {
    console.log("Audio playback started");
});

videoElement.addEventListener("ended", function() {
    console.log("Video playback ended");
});