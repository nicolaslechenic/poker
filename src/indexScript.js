
import {playParts} from "./game.js";

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.button');
  
  console.log('test script.js 1');

  // On click on play button
  play.addEventListener('click', (e) => {
    e.preventDefault();
    playParts();

  });

});

