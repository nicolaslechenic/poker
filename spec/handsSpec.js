//var hands = require('../hands');
//var cards = require('../cards');
import {cards, SUITS, CARD_NAMES, shuffle, toCard, getValue} from "../src/cards.js";
import {
    HANDS, HIGH_CARD, PAIR, TWO_PAIR, THREE_OF_A_KIND, STRAIGHT, FLUSH, FULL_HOUSE, STRAIGHT_FLUSH, ROYAL_FLUSH,
    getBestHand, getRoyalFlush, getStraightFlush, getFullHouse, getFlush,
    getStraight, getThreeOfAKind, getTwoPair, getPair, getHighCard, getName
} from "../src/hands.js";

describe('hands spec', () => {

    it('can detect a high card', () => {
        var myhand = [ toCard('seven of diamonds'), toCard('three of spades'), toCard('four of diamonds'), toCard('ace of spades'), toCard('nine of hearts') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(HIGH_CARD);
    });

    it('can detect a pair as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard('three of spades'), toCard('four of diamonds'), toCard('ace of spades'), toCard('nine of hearts') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(PAIR);
    });

    it('can detect two pairs as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard('three of spades'), toCard('four of diamonds'), toCard('ace of spades'), toCard('four of hearts') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(TWO_PAIR);
    });

    it('can detect three of a kind as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard('three of spades'), toCard('four of diamonds'), toCard('ace of spades'), toCard('three of hearts') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(THREE_OF_A_KIND);
    });

    it('can detect a straight as the highest hand', () => {
        var myhand = [ toCard('five of diamonds'), toCard('four of spades'), toCard('two of diamonds'), toCard('three of spades'), toCard('six of hearts') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(STRAIGHT);
        expect(besthand.length).toEqual(5);
    });

    it('can detect a straight and pick the best 5 cards', () => {
        var myhand = [ toCard('five of diamonds'), toCard('four of spades'), toCard('two of diamonds'), toCard('three of spades'), toCard('six of hearts') , toCard('seven of hearts'), toCard('eight of hearts')];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(STRAIGHT);
        expect(besthand.length).toEqual(5);
        expect(besthand.cards[4].value).toEqual(8);
    });

    it('can detect three of a kind as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard('eight of clubs'), toCard('ace of diamonds'), toCard('four of diamonds'), toCard('ace of diamonds'), toCard('three of diamonds') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(FLUSH);
    });

    it('can detect three of a kind as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard("four of spades"), toCard("six of hearts"), toCard("three of clubs"), toCard("four of hearts"), toCard("three of spades") ];
        var besthand = getBestHand(myhand);
        expect(besthand.length).toEqual(5);
        expect(besthand.value).toEqual(FULL_HOUSE);
    });

    it('can detect three of a kind as the highest hand', () => {
        var myhand = [ toCard('three of diamonds'), toCard('five of diamonds'), toCard('four of diamonds'), toCard('seven of diamonds'), toCard('six of diamonds') ];
        var besthand = getBestHand(myhand);
        expect(besthand.length).toEqual(5);
        expect(besthand.value).toEqual(STRAIGHT_FLUSH);
    });

    it('can detect royal flush', () => {
        var myhand = [ toCard('ten of diamonds'), toCard('king of diamonds'), toCard('queen of diamonds'), toCard('jack of diamonds'), toCard('ace of diamonds') ];
        var besthand = getBestHand(myhand);
        expect(besthand.value).toEqual(ROYAL_FLUSH);
    });

});