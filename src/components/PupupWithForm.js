import React from 'react';

function PopupWithForm(props) {
  	return (
    	<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
			<form className="popup__container popup__container_edit-profile-avatar" name="edit-profile-avatar">
    			<button type="button" aria-label="Close" className="popup__close-icon popup__close-icon_edit-profile-avatar" onClick={props.onClose}/>
    			<h5 className="popup__title">{props.title}</h5>
    			<div className="popup__form" name={props.name}>
          		{props.children}
    			</div>
			</form>
		</div>
  	);
}

export default PopupWithForm;
