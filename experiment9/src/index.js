import "./styles.css";

const videoContainer =document.querySelector(".videoPlayer");
const videoPlayer = document.querySelector(".videoPlayer video");
const playBtn = document.querySelector(".jsPlayBtn");
const volumeBtn = document.querySelector(".jsVolumeBtn");
const totalTime = document.querySelector(".totalTime");
const currentTime = document.querySelector(".currentTime");
const progressBar = document.querySelector(".videoPlayer__bar");
const videoControls = document.querySelector(".videoPlayer__controls");
let timer;

function handlePlayClick(){
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }else{
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function handleVolumeClick(){
    if(videoPlayer.muted){
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
    }else{
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}

const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }
    if(hours === "00"){
        return `${minutes}:${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
};

function setTotalTime(){
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
}
function setCurrentTime(){
    const currentTimeString = formatDate(Math.floor(videoPlayer.currentTime));
    currentTime.innerHTML = currentTimeString;
}
function handleEnded(){
    videoPlayer.currentTime = 0;
    videoPlayer.play();
}

function handleProgress(){
    const percent = (videoPlayer.currentTime/videoPlayer.duration) * 100;
    progressBar.setAttribute("value",percent);
}

function scrub(e){
    const scrubTime = (e.offsetX / progressBar.offsetWidth)*videoPlayer.duration;
    videoPlayer.currentTime = scrubTime;
}

function showControls(){
    videoControls.style.opacity = 1;
    clearTimeout(timer);
    videoContainer.classList.remove("noCursor");
    timer = setTimeout(hideControls,2000);
}
function hideControls(){
    videoControls.style.opacity = 0;
    videoContainer.classList.add("noCursor");
    videoPlayer.addEventListener("mousemove",showControls);
}
function handleSpacebar(e){
    if(e.code === "Space"){
        if(videoPlayer.paused){
            videoPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }else{
            videoPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }else{
        return
    }
}

let mousedown = false;

function init(){
    playBtn.addEventListener("click",handlePlayClick);
    volumeBtn.addEventListener("click",handleVolumeClick);
    videoPlayer.addEventListener("loadedmetadata",setTotalTime);
    videoPlayer.addEventListener("timeupdate",setCurrentTime);
    videoPlayer.addEventListener("timeupdate",handleProgress);
    videoPlayer.addEventListener("ended",handleEnded);
    progressBar.addEventListener("click",scrub);
    progressBar.addEventListener("mousemove",(e) => mousedown && scrub(e));
    progressBar.addEventListener("mousedown",()=>mousedown = true);
    progressBar.addEventListener("mouseup",()=>mousedown = false);
    videoContainer.addEventListener("mousemove",showControls);
    videoContainer.addEventListener("mouseout",hideControls);
    window.addEventListener("keydown",handleSpacebar);
}

if(videoContainer){
    init();
}