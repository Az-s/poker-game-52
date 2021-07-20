import React from 'react';

const suits = {
    Diamonds: {className: 'diamonds', symbol: '♦'},
    Clubs: {className: 'clubs', symbol: '♣'},
    Hearts: {className: 'hearts', symbol: '♥'},
    Spades: {className: 'spades', symbol: '♠'},
};

const Card = props => {
    const cardClass = suits[props.suit].className;
    const symbols = suits[props.suit].symbol;

    const cardClasses = [
        'card',
        'rank-' + props.rank.toLowerCase(),
        cardClass,
    ];

    return (
        <>
            <div className={cardClasses.join(' ')}>
                <span className="rank">{props.rank.toUpperCase()}</span>
                <span className="suit">{symbols}</span>
            </div>
        </>
    )
}

export default Card;
