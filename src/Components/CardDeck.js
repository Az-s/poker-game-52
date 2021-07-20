class CardDeck {
    static Ranks = {
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
        ten: "10",
        jack: "J",
        queen: "Q",
        king: "K",
        ace: "A"
    };

    static Suits = {
        diamonds: 'Diamonds',
        hearts: 'Hearts',
        spades: 'Spades',
        clubs: 'Clubs',
    }

    cards = [];

    constructor() {
        for (let suit in CardDeck.Suits) {
            for (let rank in CardDeck.Ranks) {
                this.cards.push({
                    suit: CardDeck.Suits[suit],
                    rank: CardDeck.Ranks[rank],
                });
            }
        }
    };

    getCard() {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        let [card] = this.cards.splice(randomIndex, 1);
        return card;
    };

    getCards(howMany) {
        const cards = [];

        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    };
};

export default CardDeck;
