import React, {useEffect, useState} from 'react';
import {api} from "../utils/Api";
import {Card} from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export function Main(props) {

    const currentUser = React.useContext(CurrentUserContext)
    const [cards, setCards] = useState([])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    useEffect(() => {
        api.getDefaultCards().then(data => {
            setCards(data)
        }).catch((err) => {
            console.log(`Ошибка ${err}`)
        })
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__subtitle">{currentUser.about}</p>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}/>
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace}>+</button>
            </section>
                {/*галерея начало*/}
                <section className="elements" aria-label="галерея">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}  onCardLike={handleCardLike} />
                    ))}
                </section>
            {/*галерея конец*/}
        </main>
    )
}

