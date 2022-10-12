import React, {useEffect, useState} from 'react';
import avatar from "../images/Avatar.png"
import {api} from "../utils/Api";
import {Card} from "./Card";

export function Main(props) {

    const [userName, setUserNameState] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setUserNameState(data.name)
                return data
            })
            .then(data => {
                setUserDescription(data.about)
                return data
            })
            .then(data => {
                setUserAvatar(data.avatar)
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`)
            })
    }, []);


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
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}/>
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace}>+</button>
            </section>
            <section className="elements" aria-label="галерея">
                {/*галерея начало*/}
                <section className="elements" aria-label="галерея">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
                    ))}
                </section>
            </section>
            {/*галерея конец*/}
        </main>
    )
}

