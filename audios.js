
var i = 0;

var audios = [
  "AC-DC.adb9682d.mp3",
  "Aretha.fa248ba0.mp3",
  "BobMarley.82644948.mp3",
  "RedHotChiliPeppers.9ac3a076.mp3"
];

var reproducir = new Audio();

function activarSonido(){
  reproducir = new Audio(audios[i]);
  reproducir.play();
}
function pararSonido(){
  reproducir.pause();
}
function anterior(){
  reproducir.pause();
  if(i <= 0){
    i = audios.length - 1;
  }else{
    i--;
  }
  reproducir = new Audio(audios[i]);
  reproducir.play();
}

function siguiente(){
  reproducir.pause();
  if(i >= audios.length){
    i = 0;
  }else{
    i++;
  }
  reproducir = new Audio(audios[i]);
  reproducir.play();
}

function mutearVolumen(){
  repro.volume -= 0.1;
}
function activarVolumen(){
  repro.volume += 0.1;
}
