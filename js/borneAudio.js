// Lancement du son selon la touche du clavier appuyée
var booleanDoublePress = true;
console.log(booleanDoublePress);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 Mousetrap.bind('a', function(e) {
      console.log("la touche a est appuyée");
      document.getElementById('livre1').play();
      return false;
  });
  Mousetrap.bind('z', function(e) {
      console.log("la touche z est appuyée");
      document.getElementById('livre2').play();
      return false;
  });
  Mousetrap.bind('e', function(e) {
      console.log("la touche e est appuyée");
      document.getElementById('livre3').play();
      return false;
  });




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

   Mousetrap.bind(['r a', 'r z', 'r e'], function(e){
      // make sure user enabled the mic
      console.log(key);
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
        save(soundFile, key+'Livre.wav');
        state == 0;
        setup();
      }
  })
/*  Mousetrap.bind('a', function(e) {
      console.log("la touche a est appuyée");
      document.getElementById('livre1').play();
      return false;
  });
  Mousetrap.bind('z', function(e) {
      console.log("la touche z est appuyée");
      document.getElementById('livre2').play();
      return false;
  });
  Mousetrap.bind('e', function(e) {
      console.log("la touche e est appuyée");
      document.getElementById('livre3').play();
      return false;
  });*/
