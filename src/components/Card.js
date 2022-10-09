import React from "react";

export function Card(props){
    return(
        // <template id="element-card">
            <div className="element">
                <button className="element__remove-btn " type="button"></button>
                <img className="element__image" src={props.src} alt={props.name} />
                <h2 className="element__title">{props.name}</h2>
                <button className="element__like" type="button"></button>
                <span className="element__like-counter">50</span>
            </div>
        // </template>
    )
}

