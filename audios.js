
var i = 0;

var audios = [
  "audios/AC-DC.mp3",
  "audios/Aretha.mp3",
  "audios/Bob Marley.mp3",
  "audios/Red Hot Chili Peppers.mp3"
]

var reproducir = new Audio();

function activarSonido(){
  reproducir = new Audio(audios[i]);
  reproducir.play();
}
function cambiarCancionIzquierda(){

}
function pararSonido(){
  reproducir.pause();
}
function cambiarCancionDerecho(){

}
function mutearVolumen(){

}
function activarVolumen(){

}


function anterior(){
  repro.pause();
  if(i <= 0){
    i = canciones.length - 1;
  }else{
    i--;
  }
  repro = new Audio(canciones[i]);
  repro.play();
}


function siguiente(){
  repro.pause();
  if(i >= canciones.length){
    i = 0;
  }else{
    i++;
  }
  repro = new Audio(canciones[i]);
  repro.play();
}

function volUp(){

}

function volDown(){

}

