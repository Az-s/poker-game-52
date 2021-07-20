import React, {Component} from 'react';
import './App.css';
import Card from './Components/Card';
import CardDeck from './Components/CardDeck';
import PokerHands from './Components/PokerHands';

class App extends Component {
  state = {
    cards: [
      { rank: '2', name: '2' },
      { rank: '3', name: '3' },
      { rank: '4', name: '4' },
      { rank: '5', name: '5' },
      { rank: '6', name: '6' },
      { rank: '7', name: '7' },
      { rank: '8', name: '8' },
      { rank: '9', name: '9' },
      { rank: '10', name: '10' },
      { rank: 'J', name: 'J' },
      { rank: 'Q', name: 'Q' },
      { rank: 'K', name: 'K' },
      { rank: 'A', name: 'A' },
      { rank: 'Joker', name: 'Joker' },
    ],
    money: 0,
  };

  shuffleCards = () => {
    let deck = new CardDeck().getCards(5);
    this.setState({cards: deck, result: PokerHands.getOutcome(deck)});
    this.updateAmount();
};

  render() {

    const cards = this.state.cards.map((card, index) => (
      <Card
          suit={card.suit}
          rank={card.rank}
          key={index}
      />
    ));

    return (
      <div className="App">
        <div className='cards'>
        <div className="App">
          <div><button onClick={this.shuffleCards}>Shuffle Cards</button></div>
          <p>{this.state.result}</p>
          {cards}
          <p>Your money: {this.state.money}</p>
      </div>
        </div>
      </div>
    );
  }
}

export default App;
