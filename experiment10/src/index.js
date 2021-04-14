import "./styles.css";

const recorderContainer = document.querySelector(".record-container");
const recordBtn = document.getElementById("jsRecordBtn");
const stopBtn = document.getElementById("jsStop");
const timeIndicator = document.getElementById("jsProgress");
let timer,startTime;


if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
  
    const constraints = { audio: true };
    let chunks = [];
  
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
  
    const mediaRecorder = new MediaRecorder(stream);
  
    
    function startRecording(){
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        recordBtn.innerHTML="Stop Recording";
        recordBtn.removeEventListener("click",startRecording);
        recordBtn.addEventListener("click",stopRecording);
        startTime = new Date();
        let startSeconds = startTime.getSeconds();
        let startMinutes = startTime.getMinutes();
        let startT = 60*startMinutes+startSeconds;
        timer = setInterval(function(){
            let now = new Date();
            let nowSeconds = now.getSeconds();
            let nowMinutes = now.getMinutes();
            let nowT = 60*nowMinutes+nowSeconds;
            timeIndicator.innerHTML=`Recording for ${nowT-startT}`;
        },1000);
    }
    function stopRecording(){
        mediaRecorder.stop();
        clearInterval(timer);
        timeIndicator.innerHTML = "";
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        recordBtn.innerHTML="Start Recording";
        recordBtn.removeEventListener("click",stopRecording);
        recordBtn.addEventListener("click",startRecording);
    } 

    recordBtn.addEventListener("click",startRecording)

  
      mediaRecorder.onstop = function(e) {
  
        const blob = new Blob(chunks, {type:"audio/webm;codecs=opus"});
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = audioURL;
        link.download = "recorded.webm";
        document.body.appendChild(link);
        link.click();
        console.log("recorder stopped");
      }
  
      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }
    })
    .catch(function(err) {
      console.log('The following error occurred: ' + err);
    })
  }
  