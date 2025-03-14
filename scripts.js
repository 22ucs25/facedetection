window.onload = function() {
    var video = document.getElementById("video");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Something went wrong with webcam access!");
            });
    }
};
