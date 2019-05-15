// Lancement du son selon la touche du clavier appuyée
var booleanDoublePress = false;
console.log(booleanDoublePress);

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

      //Touche R = record
            case 82:
            if(booleanDoublePress == true){
                booleanDoublePress == !booleanDoublePress;
                console.log(booleanDoublePress);
            } else {
                booleanDoublePress == !booleanDoublePress;
                console.log(booleanDoublePress);
            }
            break;

             default:
         }
      }
