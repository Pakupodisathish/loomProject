const video=document.querySelector("video")
let recordBtnContainer=document.querySelector(".record-btn-container")
let recordBtn=document.querySelector(".record-btn")
let captureBtnContainer=document.querySelector(".capture-btn-container")
let captureBtn=document.querySelector(".capture-btn")
let recorder
let chunks=[];
let recordFlag=false;
let transparentColor="transparent"
const constraints={
    video:true,audio:true}

navigator.mediaDevices.getUserMedia(constraints)
.then((stream)=>{
    video.srcObject=stream
    recorder=new MediaRecorder(stream)
    recorder.addEventListener("start",(e)=>{
        chunks=[];
    })
    recorder.addEventListener("dataavailable",(e)=>{
        chunks.push(e.data)
    })
    recorder.addEventListener("stop",(e)=>{
        let blob=new Blob(chunks,{type:"video/mp4"})
        let videoUrl=URL.createObjectURL(blob)
        let a=document.createElement("a")
        a.href=videoUrl
        a.download="stream.mp4"
        a.click()
    })
    recordBtnContainer.addEventListener("click",(e)=>{
        if(!recorder) return;
        recordFlag=!recordFlag;
        if(recordFlag){
            recorder.start();
            recordBtn.classList.add("scale-record")
            startTimer()
        }
        else{
            recorder.stop();
            recordBtn.classList.remove("scale-record")
            stopTimer()
        }
    })
})
const timer=document.querySelector(".timer")
let counter=0
let timerId;
function startTimer(){
    timer.style.display="block"
    function displayTimer(){
        let totalSeconds=counter;
        let hours=Number.parseInt(totalSeconds/3600);
        totalSeconds=totalSeconds%3600
        let minutes=Number.parseInt(totalSeconds/60)
        totalSeconds=totalSeconds%60 
        let seconds=totalSeconds
        const hoursFormat=hours<10?`0${hours}`:`${hours}`
        const minutesFormat=minutes<10?`0${minutes}`:`${minutes}`
        const secondsFormat=seconds<10?`0${seconds}`:`${seconds}`
        timer.textContent=`${hoursFormat}:${minutesFormat}:${secondsFormat}`
        counter++;
    }
    timerId=setInterval(displayTimer,1000)
}
function stopTimer(){
    clearInterval(timerId)
    timer.innerText="00:00:00";
    timer.style.display="none";
}

captureBtnContainer.addEventListener("click",(e)=>{
    captureBtnContainer.classList.add("scale-capture")
    let canvas=document.createElement("canvas")
    canvas.width=video.videoWidth
    canvas.height=video.videoHeight
    const tool=canvas.getContext("2d")
    tool.drawImage(video,0,0,canvas.width,canvas.height)
    tool.fillStyle=transparentColor
    tool.fillRect(0,0,canvas.width,canvas.height)
    let imageUrl=canvas.toDataURL()
    let a=document.createElement("a")
    a.href=imageUrl
    a.download="Image.jpg"
    a.click();
    setTimeout(()=>{
      captureBtnContainer.classList.remove("scale-capture")
    },500)
})

let filtrerLayer=document.querySelector(".filter-layer")
let filterAll=document.querySelectorAll(".filter")
filterAll.forEach((filterItem)=>{
    filterItem.addEventListener("click",(e)=>{
        transparentColor=getComputedStyle(filterItem).getPropertyValue("background-color");
        filtrerLayer.style.backgroundColor=transparentColor
    })
})
