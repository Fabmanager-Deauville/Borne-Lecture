// Lancement du son selon la touche du clavier appuyée
var booleanE = true;
var booleanDoublePress = true;
var booleanR = true;
var touchePress;
console.log(booleanDoublePress);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startStop(touchePress){
  if (booleanE == true){
    document.getElementById(touchePress+'Livre').play();
       booleanE=!booleanE;
  }else{
    document.getElementById(touchePress+'Livre').pause();
    booleanE=!booleanE;
    document.getElementById(touchePress+'Livre').currentTime=0;
    console.log(booleanE);
}
}
/////////////////////////////////////Lance l'audio puis recommence depuis le début////////////////////////////////////////////////////////////////////////////
Mousetrap.bind('r a', function() {
                console.log("la touche a,r est appuyée");
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
    });

if (booleanR == true){
Mousetrap.bind(['a', 'z', 'e'], function(e) {
  startStop();
});
};
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
        //soundFile.play();.save(soundFile);
        save(soundFile, key+'Livre.wav');
        background(255,0,0);
        state == 0;
        setTimeout(function(){
          document.location.reload(true);
      }, 100)
      }
  });
