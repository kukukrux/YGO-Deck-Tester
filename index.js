const fs = require('fs');
const decklist = fs.readFileSync('decklist.txt', { encoding: 'utf8' }).replaceAll('\r', '').split('\n')

function drawHand(decklist) {
    const deck = decklist;
    let hand = [];
    for (let i = 0; i < 5; i++) {
        let deckpick = Math.floor(Math.random() * deck.length);
        hand.push(deck[deckpick]);
        deck.splice(deckpick, 1);
    }
    return hand;
}
console.log(drawHand(decklist));
