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
  //this shuffles the cards. change the value of i to change the number of times you want it to shuffle. *fully random*
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
//Game's logic below, might add some variable to make it neater
//table is where the players compare their cards
//war is the array to store the 6 cards dealed from a war and 2 from the table
function gameOfWar() {
  let table = []
  let war = []
  while (player1Deck.length !== 0 && player2Deck.length !== 0) {
    table.unshift(player1Deck.shift(), player2Deck.shift())
    let player1Card = table[0].points;
    let player2Card = table[1].points;
    console.log(`player 1 draws ${player1Card}, player 2 draws ${player2Card}`);
    if (player1Card === player2Card && player1Deck.length <= 3) {
      war.unshift(player1Deck.length - 1);
      war.unshift(player2Deck[0], player2Deck[1], player2Deck[2]);
      player1Deck.splice(0, player1Deck.length - 1);
      player2Deck.splice(0, 3);
      console.log(`Its War!, Player 1 has ${player1Deck.length} cards remaining and Player 2 has ${player2Deck.length} cards remaining`);
    } else if (player1Card === player2Card && player2Deck.length <= 3) {
      war.unshift(player1Deck[0], player1Deck[1], player1Deck[2]);
      war.unshift(player2Deck.length - 1);
      player1Deck.splice(0, 3);
      player2Deck.splice(0, player2Deck.length - 1);
      console.log(`Its War!, Player 1 has ${player1Deck.length} cards remaining and Player 2 has ${player2Deck.length} cards remaining`);
    } else if (player1Card === player2Card) {
      console.log(`Its War!, Player 1 has ${player1Deck.length} cards remaining and Player 2 has ${player2Deck.length} cards remaining`)
      war.unshift(player1Deck[0], player1Deck[1], player1Deck[2]);
      war.unshift(player2Deck[0], player2Deck[1], player2Deck[2]);
      player1Deck.splice(0, 3);
      player2Deck.splice(0, 3);
    } else if (player1Card > player2Card) {
      console.log(`Player 1 wins this round. Player 1 has ${player1Deck.length} cards remaining and Player 2 has ${player2Deck.length} cards remaining and takes ${war.length} from the war and ${table.length} cards from the table`);
      war.reverse();
      player1Deck.push(...war);
      war.length = 0;
      table.reverse();
      player1Deck.push(...table);
      table.length = 0;
    } else {
      console.log(`Player 2 wins this round. Player 1 has ${player1Deck.length} cards remaining and Player 2 has ${player2Deck.length} cards remaining and takes ${war.length} from the war and ${table.length} cards from the table`);
      player2Deck.push(...war);
      war.length = 0;
      player2Deck.push(...table);
      table.length = 0;
    }
  }
  if (player1Deck == 0) {
    console.log('Player 2 wins the game');
  } else {
    console.log('Player 1 wins the game');
  }
}
gameOfWar()