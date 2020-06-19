//var cards = require('../cards');
import {cards, SUITS, CARD_NAMES, shuffle, toCard, getValue} from "../src/cards.js";

describe('cards', () => {

    it('has 52 cards', () => {
        expect(cards.length).toEqual(52);
    });

    it('has 4 suits', () => {
        expect(SUITS.length).toEqual(4);
    });

    it('has 15 card names', () => {
        expect(CARD_NAMES.length).toEqual(15);
    });

    it('contains a shuffle function ', () => {
        expect(cards['shuffle']).toBeDefined();
        expect(typeof cards['shuffle']).toEqual('function');
    });

    it('does not modify the orig cards when I deal', () => {
        var orgCardsStr = '';
        var newCardsStr = '';

        var delt = shuffle();

        cards.forEach((card, idx) => {
            orgCardsStr += card.value + card.suit + card.name;
            newCardsStr += delt[idx].value + delt[idx].suit + delt[idx].name;
        });

        expect(orgCardsStr).not.toEqual(newCardsStr);
    });

    it('has a function called toCard', () => {
        expect(cards['toCard']).toBeDefined();
        expect(typeof cards['toCard']).toEqual('function');
    });

    it('can translate a string into a card', () => {
        var test = 'four of clubs';

        var card = toCard(test);
        expect(card).toBeDefined();
        expect(card.value == 6 && card.suit == 'clubs' && card.name == 'four');
    });

});