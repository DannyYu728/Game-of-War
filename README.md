# Game-of-War
Computer vs Computer Game-of-War played in the console using Javascript.

#Features
1. Can change the amount of times the cards are shuffle. Default is set to 100.
2. Detail logs of what is happening from the card drawn, remaining cards in each player's hand and more!
3. Account for the different edge cases when "War" occures. Such as when 1 player doesn't have enough cards for "War" and another round.
4. Start Button and Reset button to quickly play on brower.
5. Bonus optional Code to use below!
6. Extra JS file without the HTML/CSS elements for Autorunning in Console.

#Optional Code
1. Since suits doesn't matter you can change out the "setup" class and "Card" class for below;
```js
class Setup {
  constructor() {
    this.deck = [];
    this.deckMaker();
    this.shuffler();
  }
  deckMaker() {
    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // below generate a deck of 52 cards 
    while (cards.length < 52) {
      cards = cards.concat(cards)
      this.deck = cards
    }
  }
  shuffler() {
    for (let i = 10; i > 0; i--) {
      let randomGeneratedIndex = Math.floor(Math.random() * this.deck.length)
      let randomGeneratedIndex2 = Math.floor(Math.random() * this.deck.length)
      let tempSavedItem = this.deck[randomGeneratedIndex]
      this.deck[randomGeneratedIndex] = this.deck[randomGeneratedIndex2];
      this.deck[randomGeneratedIndex2] = tempSavedItem;
    }
  }
}
```
2. Or the fisher yate method below instead of the shuffler() in the code. But I like the "shuffler( because uses 2 random indexs for true randomizing!
```js
// i = cards.length - 1 or i = 51(because 0 is counted). This shuffle every card with a new unique position by 1
for (i = cards.length - 1; i > 0; i--) {
  let randomGeneratedIndex = Math.floor(Math.random() * i)
  let tempSavedItem = cards[i];
  cards[i] = cards[randomGeneratedIndex];
  cards[randomGeneratedIndex] = tempSavedItem;
<<<<<<< HEAD
```
3. The dealing of cards can also be change to deal cards 1 at a time instead of splitting the deck.
```js
let shuffledDeck = cards
let player1Deck = []
let player2Deck = []
for (let i = 0; i < 26; i++) {
  player1Deck.push(shuffledDeck.pop())
  player2Deck.push(shuffledDeck.pop())
}
```

