import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose, onCloseByOverlay, onSubmit}) {
  	return (
    	<div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onClick={onCloseByOverlay}>
			<div className="popup__container" >
    			<button type="button" aria-label="Close" className="popup__close-icon" onClick={onClose}/>
    			<h5 className="popup__title">{title}</h5>
    			<form className="popup__form" name={name} onSubmit={onSubmit}>
          		{children}
    			</form>
			</div>
		</div>
  	);
}

export default PopupWithForm;
