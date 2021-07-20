import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import CardDeck from './Components/CardDeck';
import PokerHands from './Components/PokerHands';

class App extends Component {
  state = {
    cards: [],
    selectedCards: [],
    deck: null,
    money: 100,
  };

  Game = () => {
    const deck = new CardDeck();
    const cards = deck.getCards(5);
    const selectedCards = [0, 1, 2, 3, 4];
    this.setState({cards, selectedCards});
  };

  render() {

    return (
      <div className="App">
        <div className='cards'>
        <div>
          {
            this.state.cards.map((card, index) => {
              return <Card
                key={index}
                suit={card.suit}
                rank={card.rank}
              />
            })
          }
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
