
import {playParts} from "./game.js";

// On page Load
window.addEventListener('load', () => {
 const play = document.querySelector('.button');
  
    // On click on play
    play.addEventListener('click', (e) => {
      e.preventDefault();
     playParts();
      //replay();
    });
  });

