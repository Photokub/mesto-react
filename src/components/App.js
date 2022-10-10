import React, {useEffect} from 'react';
import logo from '../images/logo.svg';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";

import '../App.css';
import {PopupWithForm} from "./PopupWithForm";
import {api} from "../utils/Api";



function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [userName, setUserNameState] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleConfirmClick() {
        setIsConfirmPopupOpen(true)
    }

    function closeAllPopups() {
        setIsConfirmPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
    }

    useEffect(() => {
        api.getUserInfo(userName).then(data => {
            setUserNameState(data.name)
        })
            .catch((err) => {
                console.log(`Ошибка ${err}`)
            })
    }, [userName]);

    useEffect(() => {
        api.getUserInfo(userDescription).then(data => {
            setUserDescription(data.about)
        }).catch((err) => {
            console.log(`Ошибка ${err}`)
        })
    }, [userDescription]);

    useEffect(() => {
        api.getUserInfo(userAvatar).then(data => {
            setUserAvatar(data.avatar)
        }).catch((err) => {
            console.log(`Ошибка ${err}`)
        })
    }, [userAvatar]);

    useEffect(() => {
        api.getDefaultCards().then(data => {
            setCards(data)
        }).catch((err) => {
            console.log(`Ошибка ${err}`)
        })
    }, []);

    return (

        <div className="page">
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onConfirmClick={handleConfirmClick}
                userName={userName}
                userDescription={userDescription}
                userAvatar={userAvatar}
                cards={cards}
            />

            <Footer/>

            <PopupWithForm
                name="change-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                btnText="Сохранить"
                children={
                    <>
                        <label className="form__field">
                            <input className="form__input form__input_type_link" type="url" name="ava_link_field"
                                   defaultValue=""
                                   placeholder="Ссылка на картинку" required/>
                            <span className="form__input-error" id="ava_link_field-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                btnText="Сохранить"
                children={
                    <>
                        <label className="form__field">
                            <input className="form__input form__input_type_name" type="text"
                                   name="user_name_field" defaultValue=""
                                   required minLength="2" maxLength="40"/>
                            <span className="form__input-error" id="user_name_field-error"></span>
                        </label>
                        <label className="form__field">
                            <input className="form__input form__input_type_job" type="text" name="user_job_field"
                                   defaultValue=""
                                   required
                                   minLength="2" maxLength="200"/>
                            <span className="form__input-error" id="user_job_field-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm
                name="add-new-card"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                btnText="Cоздать"
                children={
                    <>
                        <label className="form__field">
                            <input className="form__input form__input_type_title" type="text" name="name"
                                   defaultValue=""
                                   placeholder="Название" required minLength="2" maxLength="30"/>
                            <span className="form__input-error" id="name-error"></span>
                        </label>
                        <label className="form__field">
                            <input className="form__input form__input_type_link" type="url" name="link" defaultValue=""
                                   placeholder="Ссылка на картинку" required/>
                            <span className="form__input-error" id="link-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm
                name="confirm-delete"
                title="Вы уверены?"
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
                onChange
                btnText="Да"
            />



            <section className="popup popup_full-size-image" type='button'
                     aria-label="попап полноразмерного изображения">
                <div className="popup__container-full-size-image">
                    <button className="popup__close popup__close_full-size-image" type="button"></button>
                    <figure className="popup__fullsize-img-figure">
                        <img className="popup__fullsize-img-picture" src="mesto-react/src/components/App#" alt=""/>
                        <figcaption className="popup__fullsize-img-caption">Название изображения</figcaption>
                    </figure>
                </div>
            </section>





        </div>
    );
}

export default App;
