
import { shuffle, getValue } from "./cards.js";
import { getBestHand, getName } from "./hands.js";

//'use strict'

//var cards = require('./cards');
//var hands = require('./hands');
var stage = 0;
var commonCards = [];
var players = [{name: "John"}, {name: "Paul"}
//, {name: "George"}, {name: "Ringo"}
];

var bestPlayer = null;
var bestHand = null;

var deck = shuffle();
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

var cp11 = document.getElementById('cp11');
var cp12 = document.getElementById('cp12');
var cp21 = document.getElementById('cp21');
var cp22 = document.getElementById('cp22');
var cc1 = document.getElementById('cc1');
var cc2 = document.getElementById('cc2');
var cc3 = document.getElementById('cc3');
var cc4 = document.getElementById('cc4');
var cc5 = document.getElementById('cc5');
var stageElement = document.getElementById('stage');

const cards_player = document.querySelectorAll('.card_player');
const cards_flop = document.querySelectorAll('.card_flop');
const card_turn = document.querySelectorAll('.card_turn');
const card_river = document.querySelectorAll('.card_river');
const cards = document.querySelectorAll('.card');

player1.innerText =  `${players[0].name}`;
player2.innerText =  `${players[1].name}`;

function playParts(){
    


    switch(stage){
        case 0: //shuffle
            commonCards = [];
            deck = shuffle();
            cp11.src = '../../card_images/card_back.jpg';
            cp12.src = '../../card_images/card_back.jpg';
            cp21.src = '../../card_images/card_back.jpg';
            cp22.src = '../../card_images/card_back.jpg';
            cc1.src = '../../card_images/card_back.jpg';
            cc2.src = '../../card_images/card_back.jpg';
            cc3.src = '../../card_images/card_back.jpg';
            cc4.src = '../../card_images/card_back.jpg';
            cc5.src = '../../card_images/card_back.jpg';
            echoBestPlayer('shuffle');
            cards.forEach(e => {
                e.style.transform = 'none';
                e.style.transition = 'none';
            });
            cards.forEach((e) => e.classList.add('flip'));
            break;

        case 1: //deal
            commonCards = [];
            for (var i = 0; i < players.length; i++) {
                players[i].pocketCards = deck.splice(0, 2);
            }
            echoBestPlayer('deal');
            cp11.src = '../../card_images/' + players[0].pocketCards[0].name + '_of_' + players[0].pocketCards[0].suit + '.png';
            cp12.src = '../../card_images/' + players[0].pocketCards[1].name + '_of_' + players[0].pocketCards[1].suit + '.png';
            cp21.src = '../../card_images/' + players[1].pocketCards[0].name + '_of_' + players[1].pocketCards[0].suit + '.png';
            cp22.src = '../../card_images/' + players[1].pocketCards[1].name + '_of_' + players[1].pocketCards[1].suit + '.png';
            flipCards(cards_player);

            break;

        case 2: //flop
            commonCards = deck.splice(0, 3);
            echoBestPlayer('flop');
            cc1.src = '../../card_images/' + commonCards[0].name + '_of_' +  commonCards[0].suit + '.png';
            cc2.src = '../../card_images/' + commonCards[1].name + '_of_' +  commonCards[1].suit + '.png';
            cc3.src = '../../card_images/' + commonCards[2].name + '_of_' +  commonCards[2].suit + '.png';
            flipCards(cards_flop);

            break;

        case 3: //turn
            commonCards.push.apply(commonCards, deck.splice(0, 1));
            echoBestPlayer('turn');
            cc4.src = '../../card_images/' + commonCards[3].name + '_of_' +  commonCards[3].suit + '.png';
            flipCards(card_turn);

            break;

        case 4: //river
            commonCards.push.apply(commonCards, deck.splice(0, 1));
            echoBestPlayer('river');
            cc5.src = '../../card_images/' + commonCards[4].name + '_of_' +  commonCards[4].suit + '.png';
            flipCards(card_river);
            break;

        default: 
            console.log('unknown stage !');
            break;

    }
    if(stage<4){
        stage++;
    }
    else{
        stage = 0;
    }


    function getPlayerWithBestHand(){
        bestPlayer = null;
        bestHand = null;
        
        for(var i = 0; i < players.length;i++){
    
            var playerCards = players[i].pocketCards.slice(0);
            playerCards.push.apply(playerCards, commonCards);
    
            var hand = getBestHand(playerCards);
            console.log(hand);
            
            if(!bestPlayer || !bestHand){
                bestPlayer = players[i];
                bestHand = hand;
            }
            else{
                if(hand.value > bestHand.value){
                    bestPlayer = players[i];
                    bestHand = hand;
                }
                else{
                    if(hand.value == bestHand.value){
                        if(hand.value == 0){
                            // high card equality detection
                            if(hand.cards[0].value > bestHand.cards[0].value){
                                bestPlayer = players[i];
                                bestHand = hand;
                            }
                            else{
                                if(hand.cards[0].value == bestHand.cards[0].value){
                                    bestPlayer = {name: 'égalité'};
                                    bestHand = hand;
                                }
                            }
                        
                        }
                    }
                }
            }
            
        }
        return bestPlayer;
    }
    
    function echoBestPlayer(round){
        console.log('------------------------------------------------------------------------------------------------------------------------');
        console.log(round);
        console.log('------------------------------------------------------------------------------------------------------------------------');
        let message = '';
        if(round!='shuffle'){
            getPlayerWithBestHand();
            if(bestPlayer.name=='égalité'){
                message = `Egalité !`
            }
            else{
                message = `${bestPlayer.name} is winning with a ${getName(bestHand.value)}.`;
            }
            console.log(message);
            resultat.innerText = message;
        }
        else{
            resultat.innerText = '';
        }
        
        stageElement.innerText =  `${round.charAt(0).toUpperCase() + round.slice(1)}`;
    }
}


function flipCards(cards){
    cards.forEach(e => {
        e.style.transform = 'rotateY(360deg)';
        e.style.transition = 'all 1.5s';
    });
    cards.forEach((e) => e.classList.add('flip'));
}


export {playParts};


