// Lancement du son selon la touche du clavier appuyée
var booleanDoublePress = true;

console.log(booleanDoublePress);

/////////////////////////////////////////////////Initialisation P5.JS//////////////////////////////////////////////
var mic, recorder, soundFile;
var state = 0;

function setup() {
  background(200);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();

  text('keyPress to record', 20, 20);
}

   Mousetrap.bind('r a', function(){
      // make sure user enabled the mic
      if (state === 0 && mic.enabled) {

        // record to our p5.SoundFile
        recorder.record(soundFile);

        background(255,0,0);
        text('Recording!', 20, 20);
        state++;
      }
      else if (state === 1) {
        background(0,255,0);

        // stop recorder and
        // send result to soundFile
        recorder.stop();

        text('Stopped', 20, 20);
        save(soundFile, 'test.wav');
        state == 0;
      }
  })

////////////////////////////////Lancer le son quand on appuie sur a,z ou e/////////////////////////////////////////
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

          case 82:
          if(booleanDoublePress == true){
              booleanDoublePress = !booleanDoublePress;
              console.log(booleanDoublePress);
              console.log("j'ai lancé l'enregistrement");
          } else {
              booleanDoublePress = !booleanDoublePress;
              console.log(booleanDoublePress);
              console.log("j'ai arrêté l'enregistrement");

          }
            break;
          default:

        }
      }
