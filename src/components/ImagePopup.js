import React from 'react';

function ImagePopup({card, onClose, isOpen}) {
    return (
        <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__preview">
            <button type="button" className="popup__close-icon popup__close-icon_image" onClick={onClose} />
            <img className="popup__preview-image" src={card.link} alt={card.name} />
            <p className="popup__preview-text">{card.name}</p>
        </div>
    </div>
    );
}


export default ImagePopup;