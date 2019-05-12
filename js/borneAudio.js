// 4- click au CLAVIER
window.onkeyup = function(e) {

   switch (e.keyCode) {
     case 65:
        console.log("la touche a est appuyée");
       break;
      case 90:
        console.log("la touche z est appuyée");
       break;
     default:
     case 69:
        console.log("la touche e est appuyée");
       break;

   }
}
