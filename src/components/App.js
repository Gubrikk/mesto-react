import React from 'react';
import PopupWithForm from './PupupWithForm';
import ImagePopup from './ImagePopup';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  	const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);
	const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = React.useState(false);
  	const [selectedCard, setSelectedCard] = React.useState({});

  	function handleEditProfileClick() {
    	setIsEditProfilePopupOpen(true);
  	}

  	function handleAddPlaceClick() {
    	setIsAddPlacePopupOpen(true);
  	}

  	function handleEditAvatarClick() {
    	setIsEditAvatarPopupOpen(true);
  	}

  	function handleCardClick(card) {
    	setSelectedCard(card);
    	setIsPhotoPopupOpen(true);
  	}
	
	function handleRemoveCardClick() {
		setIsRemoveCardPopupOpen(true)
	}
	  
  	function closeAllPopups() {
    	setIsEditProfilePopupOpen(false);
    	setIsAddPlacePopupOpen(false);
    	setIsEditAvatarPopupOpen(false);
    	setIsPhotoPopupOpen(false);
		setIsRemoveCardPopupOpen(false);
  	}

  	return (
		<div className="page">
		  	<Header />
		  	<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
				onRemoveCard={handleRemoveCardClick}
		  	/>
		  	<PopupWithForm
				name="edit-profile"
				title="Редактировать профиль"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}>
				<input
			  		className="popup__field popup__field_type_name"
			  		type="text"
			  		name="name"
			  		placeholder="Имя"
			  		required
			  		minLength="2"
			  		maxLength="40"
				/>
				<span className="error" id="name-error" />
				<input
			  		className="popup__field popup__field_type_job"
			  		type="text"
			  		name="job"
			  		placeholder="О Себе"
			  		required
			  		minLength="2"
			  		maxLength="200"
				/>
				<span className="error" id="job-error" />
				<button className="popup__submit-button" type="submit" aria-label="Сохранить профиль">Сохранить</button>
		  	</PopupWithForm>
		  	<PopupWithForm
				name="update-avatar"
				title="Обновить аватар"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}>
				<input
			  		className="popup__field popup__field_type_avatar"
			  		type="url"
			  		name="avatar-edit"
			  		placeholder="Ссылка на изображение"
			  		required
				/>
				<span className="error" id="avatar-edit-error" />
				<button className="popup__submit-button" type="submit" aria-label="Обновить аватар">Обновить</button>
		  	</PopupWithForm>
		  	<PopupWithForm
				name="remove-card"
				title="Вы уверены?"
				isOpen={isRemoveCardPopupOpen}
				onClose={closeAllPopups}>
				<button className="popup__submit-button" type="submit" aria-label="Удалить карточку">Да</button>
		  	</PopupWithForm>
		  	<PopupWithForm
				name="add-place"
				title="Новое место"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}>
				<input
			  		className="popup__field popup__field_type_new-place"
			  		type="text"
			  		name="new-place"
			  		placeholder="Название"
			  		required
			  		maxLength="30"
				/>
				<span className="error" id="new-place-error" />
				<input
			  		className="popup__field popup__field_type_link-image"
			  		type="url"
			  		name="link-image"
			  		placeholder="Ссылка на картинку"
			  		required
				/>
				<span className="error" id="link-image-error" />
				<button className="popup__submit-button" type="submit" aria-label="Добавить место" disabled>Создать</button>
		  	</PopupWithForm>
		  	<ImagePopup
				card={selectedCard}
				isOpen={isPhotoPopupOpen}
				onClose={closeAllPopups}
		  	/>
		  	<Footer />
		</div>
	);
}

export default App;
