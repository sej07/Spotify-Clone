console.log("welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement= new Audio("1.mp3");
let masterPlay= document.getElementById("masterplay");
let progressbar=document.getElementById("progressbar");
let masterSong= document.getElementById("masterSong");
let gif=document.getElementById("gif");
let songItem= Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName: "Kadhi Tu", filePath: "1.mp3", coverPath:"cover1.png"},
    {songName: "Kabhi Kabhi Aditi", filePath: "2.mp3", coverPath:"cover2.png"},
    {songName: "Tu Hi Hai", filePath: "3.mp3", coverPath:"cover3.png"},
    {songName: "Aise Kyun", filePath: "4.mp3", coverPath:"cover4.png"},
    {songName: "Baarshein", filePath: "5.mp3", coverPath:"cover5.png"},
    {songName: "Dil Diyan Gallan", filePath: "6.mp3", coverPath:"cover6.png"},
    {songName: "Kesariya", filePath: "7.mp3", coverPath:"cover7.png"},
    {songName: "Maan Meri Jaan", filePath: "8.mp3", coverPath:"cover8.png"},
    {songName: "Tum se hi", filePath: "9.mp3", coverPath:"cover9.png"},
    {songName: "Raahjhana", filePath: "10.mp3", coverPath:"cover10.png"},
]
songItem.forEach((Element, i)=>{
    Element.getElementsbyTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsbyClassName("songName")[0].innertext = songs[i].songName; 
})

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || (audioElement.currentTime = 0)){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0; 
    }
})

//listen to songs
audioElement.addEventListener('timeupdate', ()=>{
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100 );
    console.log(progress);
    progressbar.value=progress;

});

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration /100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        let song = songs[songIndex];
        audioElement.src= song.filePath;
        masterSong.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9){
    songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    let song = songs[songIndex];
    audioElement.src= song.filePath;
        masterSong.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<= 0){
    songIndex = 9;
    }
    else{
        songIndex -=1;
    }
        let song = songs[songIndex];
        audioElement.src= song.filePath;
        masterSong.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

