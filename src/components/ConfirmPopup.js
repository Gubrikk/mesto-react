import React from 'react';
import PopupWithForm from './PupupWithForm';

function ConfirmPopup({ isOpen, onClose, onCloseOverlay, onConfirmDelete }) {

  	function handleSubmit(evt) {
    	evt.preventDefault();
    	onConfirmDelete();
  	}

  	return (
    	<PopupWithForm
      		name="remove-card"
      		title="Вы уверены?"
      		isOpen={isOpen}
      		onClose={onClose}
      		onCloseByOverlay={onCloseOverlay}
      		onSubmit={handleSubmit}>
      		<button className="popup__submit-button" type="submit" aria-label="Удалить карточку">Да</button>
    	</PopupWithForm>
  	);
}

export default ConfirmPopup;