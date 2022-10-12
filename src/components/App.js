import {useState} from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";


import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: '', link: ''})

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
        setSelectedCard({name: '', link: ''})
    }

    return (

        <div className="page">
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onConfirmClick={handleConfirmClick}
                onCardClick={setSelectedCard}
            />

            <Footer/>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <PopupWithForm
                name="change-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                btnText="Сохранить"
            >
                <label className="form__field">
                    <input className="form__input form__input_type_link" type="url" name="ava_link_field"
                           defaultValue=""
                           placeholder="Ссылка на картинку" required/>
                    <span className="form__input-error" id="ava_link_field-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                btnText="Сохранить"
            >
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
            </PopupWithForm>

            <PopupWithForm
                name="add-new-card"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                btnText="Cоздать"
            >
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
            </PopupWithForm>

            <PopupWithForm
                name="confirm-delete"
                title="Вы уверены?"
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
                onChange
                btnText="Да"
            />

        </div>
    );
}

export default App;
