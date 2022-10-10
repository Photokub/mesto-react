import React from "react";

export function Card({cards}){
    return(
        cards.map((card) => (
                <div className="element" key={card._id}>
                    <button className="element__remove-btn " type="button"></button>
                    <img className="element__image" src={card.link} alt={card.name} />
                    <h2 className="element__title">{card.name}</h2>
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            ))
    )
}

