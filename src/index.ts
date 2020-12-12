import { Card, Player } from './Entities';
import { Stack } from './utils/data_structures';

class Whot {
  private deck: Stack<Card> = new Stack<Card>();
  private players: Player[] = [];

  private shuffleCards(stack: Stack<Card>): Stack<Card> {
    const cards: Card[] = stack.toArray();

    for (let i = 0; i < cards.length; i++) {
      const j = Math.floor(Math.random() * cards.length - 1);
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    return new Stack<Card>().fromArray(cards);
  }

  newGame(cardsPerPlayer: number, players: Player[]): Whot {
    this.players = players;
    this.deck = this.shuffleCards(new Stack<Card>().fromArray(Card.newDeck()));

    // Share cards to all players
    for (let i = 0; i < cardsPerPlayer; i++) {
      this.players.forEach(player => player.cards.push(this.deck.pop()));
    }

    return this;
  }
}

const whot = new Whot();
whot.newGame(5, [new Player('James'), new Player('Taofeek')]);
