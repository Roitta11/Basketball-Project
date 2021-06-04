var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

// Function to stop the video
function stopVideo(){
    videoPlayer.style.display = "none"
}

// Function to play the video
function playVideo(file){
    myVideo.src=file;
    videoPlayer.style.display="block";

}