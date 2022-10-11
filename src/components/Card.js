import React from "react";

export function Card(props) {

    const handleCardClick = () => {
        props.onCardClick(props.card)
    };

    return (
        <div className="element">
            <button className="element__remove-btn " type="button"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
            <h2 className="element__title">{props.card.name}</h2>
            <button className="element__like" type="button"></button>
            <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
    )
}

