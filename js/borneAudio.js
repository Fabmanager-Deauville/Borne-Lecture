// 4- click au CLAVIER
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
       default:
   }
}

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
  });
