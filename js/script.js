
import {play} from "./game.js";

function replay(){
  play();
}

// On page Load
window.addEventListener('load', () => {
 const play = document.querySelector('.button');
  
    // On click on play
    play.addEventListener('click', (e) => {
      e.preventDefault();
     
      replay();
    });
  });
