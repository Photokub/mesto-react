import React from 'react';
import avatar from "../images/Avatar.png"

export function Main(props){

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.handleEditAvatarClick}>
                    <img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <p className="profile__subtitle">Исследователь океана</p>
                    <button className="profile__edit-btn" type="button" onClick={props.handleEditProfileClick} />
                </div>
                <button className="profile__add-btn" type="button" onClick={props.handleAddPlaceClick}>+</button>
            </section>
            <section className="elements" aria-label="галерея">
                {/*галерея начало*/}
                <template id="element-card">
                    <div className="element">
                        <button className="element__remove-btn " type="button"></button>
                        <img className="element__image" src="../images/Karachaevsk.jpg" alt="Карачаевск" />
                        <h2 className="element__title">Карачаевск</h2>
                        <button className="element__like" type="button"></button>
                        <span className="element__like-counter">0</span>
                    </div>
                </template>
            </section>
            {/*галерея конец*/}
        </main>
    )
}

