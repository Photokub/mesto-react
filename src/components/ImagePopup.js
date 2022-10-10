import React from "react";

export function ImagePopup(props) {
    return (
        <section className={`popup popup_full-size-image" ${props.card ? 'popup_opened' : ''}`} type='button'
                 aria-label="попап полноразмерного изображения"
                 // onClose={closeAllPopups}
        >
            <div className="popup__container-full-size-image">
                <button className="popup__close popup__close_full-size-image" type="button"></button>
                <figure className="popup__fullsize-img-figure">
                    <img className="popup__fullsize-img-picture" src="mesto-react/src/components/App#" alt=""/>
                    <figcaption className="popup__fullsize-img-caption">Название изображения</figcaption>
                </figure>
            </div>
        </section>
    )
}

