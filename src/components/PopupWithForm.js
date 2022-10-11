import React from "react";


export function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name}  ${props.isOpen ? 'popup_opened' : ''}`} type='button'
                 aria-label="попап">
            <div className={`popup__container popup__container-${props.name}`}>
                <h3 className="popup__title">{props.title}</h3>
                <button className="popup__close" type="button" onClick={props.onClose}/>
                <form className="form form_profile" name={`${props.name}`} method="post" noValidate>
                    {props.children}
                    <button className="form__save-btn form__change-ava-btn form__save-btn_invalid"
                            type="submit"
                            disabled>
                        {props.btnText}
                    </button>
                </form>
            </div>
        </section>
    )
}