// Lancement du son selon la touche du clavier appuyée
var booleanDoublePress = true;
console.log(booleanDoublePress);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Mousetrap.bind('r a', function() {
                console.log("la touche a,r est appuyée");
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
    });


if (onkeypress= '82'!= true){


Mousetrap.bind('a', function() {
                console.log("la touche a est appuyée");
                document.getElementById('livre1').play();
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });
Mousetrap.bind('z', function() {
                console.log("la touche z est appuyée");
                document.getElementById('livre2').play();
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });
Mousetrap.bind('e', function() {
                console.log("la touche e est appuyée");
                document.getElementById('livre3').play();
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });
Mousetrap.bind('up up down down left right left right b a enter', function() {
                console.log('konami code');
        });
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*window.onkeyup = function (e){
        switch (e.keyCode) {
           case 65:
              console.log("la touche a est appuyée");
              document.getElementById('livre1').play();
              if(booleanDoublePress == true){
                  booleanDoublePress = !booleanDoublePress;
                  console.log(booleanDoublePress);
              } else {
                  booleanDoublePress = !booleanDoublePress;
                  console.log(booleanDoublePress);
              }

            break;
            case 90:
              console.log("la touche z est appuyée");
              document.getElementById('livre2').play();
              if(booleanDoublePress == true){
                  booleanDoublePress = !booleanDoublePress;
                  console.log(booleanDoublePress);
              } else {
                  booleanDoublePress = !booleanDoublePress;
                  console.log(booleanDoublePress);
              }

             break;

           case 69:
              console.log("la touche e est appuyée");
              document.getElementById('livre3').play();
             break;

      //Touche R = record
            case 82:
                if(booleanDoublePress == true){
                    booleanDoublePress = !booleanDoublePress;
                    console.log(booleanDoublePress);
                } else {
                    booleanDoublePress = !booleanDoublePress;
                    console.log(booleanDoublePress);
                }
            break;
            default:
          }

        }*/
