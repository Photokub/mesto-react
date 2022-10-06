import React from 'react';
import logo from '../images/logo.svg';
import {Header} from "./Header";
import {Main} from "./Main";
//import {handleEditAvatarClick} from "./Main.js";
import {Footer} from "./Footer";

import '../App.css';
import {PopupWithForm} from "./PopupWithForm";


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

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


    return (

        <div className="page">
        <Header/>
        <Main
            handleEditAvatarClick={handleEditAvatarClick}
            handleEditProfileClick={handleEditProfileClick}
            handleAddPlaceClick={handleAddPlaceClick}
        />
        <Footer/>

        <PopupWithForm
            name="change-avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            children={
                <>
                    <label className="form__field">
                        <input className="form__input form__input_type_link" type="url" name="ava_link_field"
                               defaultValue=""
                               placeholder="Ссылка на картинку" required/>
                        <span className="form__input-error" id="ava_link_field-error"></span>
                    </label>
                    <button className="form__save-btn form__change-ava-btn form__save-btn_invalid"
                            type="submit"
                            disabled>
                        Сохранить
                    </button>
                </>
            }
        />

        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
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
                    <button className="form__save-btn" type="submit">Сохранить</button>
                </>
            }
        />

        <PopupWithForm
            name="add-new-card"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
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
                    <button className="form__save-btn form__add-card-btn form__save-btn_invalid"
                            type="submit"
                            disabled>Создать
                    </button>
                </>
            }
        />

        <PopupWithForm
            name="confirm-delete"
            title="Вы уверены?"
            isOpen={isConfirmPopupOpen}
            onChange
            children={
                <>
                    <button className="popup__confirm-delete-button">Да</button>
                </>
            }
        />


        {/*<section className="popup profile-popup" type='button' aria-label="попап">*/}
        {/*    <div className="popup__container">*/}
        {/*        <h3 className="popup__title">Редактировать профиль</h3>*/}
        {/*        <button className="popup__close" type="button"/>*/}
        {/*        <form className="form form_profile" name="" method="post" noValidate>*/}
        {/*            <label className="form__field">*/}
        {/*                <input className="form__input form__input_type_name" type="text" name="user_name_field" value=""*/}
        {/*                       required minLength="2" maxLength="40"/>*/}
        {/*                <span className="form__input-error" id="user_name_field-error"></span>*/}
        {/*            </label>*/}
        {/*            <label className="form__field">*/}
        {/*                <input className="form__input form__input_type_job" type="text" name="user_job_field" value=""*/}
        {/*                       required*/}
        {/*                       minLength="2" maxLength="200"/>*/}
        {/*                <span className="form__input-error" id="user_job_field-error"></span>*/}
        {/*            </label>*/}
        {/*            <button className="form__save-btn" type="submit">Сохранить</button>*/}
        {/*        </form>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*<section className="popup popup_add-new-card" type='button' aria-label="попап добавления новой карточки">*/}
        {/*    <div className="popup__container">*/}
        {/*        <h3 className="popup__title">Новое место</h3>*/}
        {/*        <button className="popup__close popup__close_add-new-card" type="button"></button>*/}
        {/*        <form className="form form_add-new-card" name="add_new_card" method="post" noValidate>*/}
        {/*            <label className="form__field">*/}
        {/*                <input className="form__input form__input_type_title" type="text" name="name" value=""*/}
        {/*                       placeholder="Название" required minLength="2" maxLength="30"/>*/}
        {/*                <span className="form__input-error" id="name-error"></span>*/}
        {/*            </label>*/}
        {/*            <label className="form__field">*/}
        {/*                <input className="form__input form__input_type_link" type="url" name="link" value=""*/}
        {/*                       placeholder="Ссылка на картинку" required/>*/}
        {/*                <span className="form__input-error" id="link-error"></span>*/}
        {/*            </label>*/}
        {/*            <button className="form__save-btn form__add-card-btn form__save-btn_invalid" type="submit"*/}
        {/*                    disabled>Создать*/}
        {/*            </button>*/}
        {/*        </form>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <section className="popup popup_full-size-image" type='button' aria-label="попап полноразмерного изображения">
            <div className="popup__container-full-size-image">
                <button className="popup__close popup__close_full-size-image" type="button"></button>
                <figure className="popup__fullsize-img-figure">
                    <img className="popup__fullsize-img-picture" src="mesto-react/src/components/App#" alt=""/>
                    <figcaption className="popup__fullsize-img-caption">Название изображения</figcaption>
                </figure>
            </div>
        </section>
        {/*<section className='popup popup_confirm-delete' type="button" aria-label="попап подтверждения удаления">*/}
        {/*    <div className="popup__container-confirm-delete">*/}
        {/*        <h3 className='popup__title'>Вы уверены?</h3>*/}
        {/*        <button className="popup__close" type="button"></button>*/}
        {/*        <button className="popup__confirm-delete-button">Да</button>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*<section className="popup popup_change-avatar" aria-label="попап изменения аватара">*/}
        {/*    <div className="popup__container-change-avatar">*/}
        {/*        <h3 className="popup__title">Обновить аватар</h3>*/}
        {/*        <form className="form form_change-avatar" method="post" name="change-avatar-form" noValidate>*/}
        {/*            <label className="form__field">*/}
        {/*                <input className="form__input form__input_type_link" type="url" name="ava_link_field" value=""*/}
        {/*                       placeholder="Ссылка на картинку" required/>*/}
        {/*                <span className="form__input-error" id="ava_link_field-error"></span>*/}
        {/*            </label>*/}
        {/*            <button className="form__save-btn form__change-ava-btn form__save-btn_invalid" type="submit"*/}
        {/*                    disabled>*/}
        {/*                Сохранить*/}
        {/*            </button>*/}
        {/*        </form>*/}
        {/*        <button className="popup__close" type="button"></button>*/}
        {/*    </div>*/}
        {/*</section>*/}
        </div>

    );
}

export default App;
