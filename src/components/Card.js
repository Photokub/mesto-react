import React from "react";
import {ImagePopup} from "./ImagePopup";

export function Card({cards, onCardClick, card}){

    const handleCardClick = () => {
        onCardClick(card)
    };

    <img
        src={card.link}
        onClick={handleCardClick}
    />

    return(
        cards.map((card) => (
                <div className="element" key={card._id}
                     //onCardClick={handleCardClick}
                     card={card}
                     onCardClick={onCardClick}
                >
                    <button className="element__remove-btn " type="button"></button>
                    <img className="element__image" src={card.link} alt={card.name} />
                    <h2 className="element__title">{card.name}</h2>
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            ))
    )
}

