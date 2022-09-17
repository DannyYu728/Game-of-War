//this class create an object for each card
class Card {
  constructor(suits, values, points) {
    this.suits = suits;
    this.values = values;
    this.points = points;
  }
}
// The class "Setup", take care of the pregame logic such as assigning the attributes and value to each new card object
// It then shuffles the deck
class Setup {
  constructor() {
    this.deck = [];
    this.createDeck();
    this.shuffler();
  }
  suits = ["Dia", "Club", "Heart", "Spade"];
  values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  //this assign each value of the 3 array above to the correct keys in the card class for each card.
  createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.deck.push(new Card(this.suits[i], this.values[j], this.points[j]));
      }
    }
  }
  //this shuffles the cards. change the value of i to change the number of times you want it to shuffle. *Almost fully random*
  shuffler() {
    for (let i = 100; i > 0; i--) {
      let randomGeneratedIndex = Math.floor(Math.random() * 52);
      let randomGeneratedIndex2 = Math.floor(Math.random() * 52);
      let tempSavedItem = this.deck[randomGeneratedIndex];
      this.deck[randomGeneratedIndex] = this.deck[randomGeneratedIndex2];
      this.deck[randomGeneratedIndex2] = tempSavedItem;
    }
  }
}
//below is a quick function to split the newly shuffle deck to both players.
function splitDeck() {
  let shuffledDeck = new Setup()
  player1Deck = shuffledDeck.deck.splice(0, 26)
  player2Deck = shuffledDeck.deck
}
splitDeck()