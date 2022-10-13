import React from "react";


export function PopupWithForm({isOpen, onClose, name, title, btnText, children}) {
    return (
        <section className={`popup popup_${name}  ${isOpen ? 'popup_opened' : ''}`}
                 aria-label="попап">
            <div className={`popup__container popup__container-${name}`}>
                <h3 className="popup__title">{title}</h3>
                <button className="popup__close" type="button" onClick={onClose}/>
                <form className="form" name={`${name}`} method="post" >
                    {children}
                    <button className="form__save-btn  form__save-btn_invalid"
                            type="submit"
                            disabled>
                        {btnText}
                    </button>
                </form>
            </div>
        </section>
    )
}