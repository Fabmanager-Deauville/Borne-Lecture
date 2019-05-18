// Lancement du son selon la touche du clavier appuyée
var booleanDoublePress = true;

console.log(booleanDoublePress);

//Enregistrer et lancer sons
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
  MediaRecorder.isTypeSupported("audio/wav;codecs=MS_PCM");
    const mediaRecorder = new MediaRecorder(stream);

    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks, { type : 'audio/mpeg-3' });
     const audioUrl = URL.createObjectURL(audioBlob)
     const audio = new Audio(audioUrl);
     audio.play();
    });
//Lancer le son quand on appuie sur a,z ou e
      window.onkeyup = function(e) {
        switch (e.keyCode) {
          case 65:
             console.log("la touche a est appuyée");
             document.getElementById('livre1').play();
            break;
           case 90:
             console.log("la touche z est appuyée");
             document.getElementById('livre2').play();
            break;

          case 69:
             console.log("la touche e est appuyée");
             document.getElementById('livre3').play();
            break;
//Quand on appuie sur la touche "r" alors l'enregistrement commence
//Quand on appuie une deuxième fois sur la touche "r", le son s'arrête et se joue
          case 82:
          if(booleanDoublePress == true){
              mediaRecorder.start();
              booleanDoublePress = !booleanDoublePress;
              console.log(booleanDoublePress);
              console.log("j'ai lancé l'enregistrement");
          } else {
            mediaRecorder.stop();
              booleanDoublePress = !booleanDoublePress;
              console.log(booleanDoublePress);
              console.log("j'ai arrêté l'enregistrement");

          }
            break;
          default:

        }
      }
});
