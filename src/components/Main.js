import React from 'react';
import avatar from "../images/Avatar.png"
import {api} from "../utils/Api";
import {Card} from "./Card";

export function Main(props){
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props. onEditAvatar} >
                    <img className="profile__avatar" src={props.userAvatar} alt="Аватар пользователя"   />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{props.userName}</h1>
                    <p className="profile__subtitle">{props.userDescription}</p>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} />
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace}>+</button>
            </section>
            <section className="elements" aria-label="галерея">
                {/*галерея начало*/}
               {props.cards}
            </section>
            {/*галерея конец*/}
        </main>
    )
}

