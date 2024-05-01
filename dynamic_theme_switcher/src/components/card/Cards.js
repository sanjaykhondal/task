import React from 'react';
import { Quotes } from '../../Quotes';
import './Cards.css';

const Cards = () => {
    return (
        <div className="card-group">
            {Quotes.map((quote, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{quote.quote}</h5>
                        <p className="card-text">- {quote.author}</p>
                    </div>
                    <button>View</button>
                </div>
            ))}
        </div>
    );
};

export default Cards;
