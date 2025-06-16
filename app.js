// store the video in individual constant variable document for play the vedio
const video1=document.getElementById('projectVideo1');
const video2=document.getElementById('projectVideo2');
const video3=document.getElementById('projectVideo3');
const video4=document.getElementById('projectVideo4');

const videoList=[video1,video2,video3,video4];
// when the mouse is over the video it will start playing
videoList.forEach(function(video){
    video.addEventListener("mouseover",function(){
        video.play()
    })
    // mouse out it will not going to play
    video.addEventListener("mouseout",function (){
        video.pause()
    })
})