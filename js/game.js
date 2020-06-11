
import { shuffle} from "../js/cards.js";
import {
    getBestHand, getName
} from "../js/hands.js";

//'use strict'

//var cards = require('./cards');
//var hands = require('./hands');


function play(){
    var players = [{name: "John"}, {name: "Paul"}
    //, {name: "George"}, {name: "Ringo"}
    ];

    var bestPlayer = null;
    var bestHand = null;

    var deck = shuffle();


    for (var i = 0; i < players.length; i++) {
        players[i].pocketCards = deck.splice(0, 2);
    }

    var commonCards = [];

    echoBestPlayer('deal');

    commonCards = deck.splice(0, 3);
    echoBestPlayer('flop');

    commonCards.push.apply(commonCards, deck.splice(0, 1));
    echoBestPlayer('turn');

    commonCards.push.apply(commonCards, deck.splice(0, 1));
    echoBestPlayer('river');

    function getPlayerWithBestHand(){
        bestPlayer = null;
        bestHand = null;
    
        for(var i = 0; i < players.length;i++){
    
            var playerCards = players[i].pocketCards.slice(0);
            playerCards.push.apply(playerCards, commonCards);
    
            var hand = getBestHand(playerCards);
    
            if(!bestPlayer || !bestHand){
                bestPlayer = players[i];
                bestHand = hand;
                continue;
            }
    
            if(hand.value > bestHand.value){
                bestPlayer = players[i];
                bestHand = hand;
                continue;
            }
    
        }
    
        return bestPlayer;
    }
    
    function echoBestPlayer(round){
        getPlayerWithBestHand();
        let message = `At the ${round}, ${bestPlayer.name} is winning with a ${getName(bestHand.value)}`
        console.log(message);
        resultat.innerText = message;
    
    }
}

//play();

export {play};