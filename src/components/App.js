import React from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/currentUserContext';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import ConfirmPopup from './ConfirmPopup';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  	const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);
	const [isConfitmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  	const [selectedCard, setSelectedCard] = React.useState({});
	const [currentUser, setCurrentUser] = React.useState({});
	const [cards, setCards] = React.useState([]);


	React.useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
      		.then(([user, cards]) => {
        		setCurrentUser(user);
        		setCards(cards);
		  	})
		  	.catch((err) => {
				console.error(err)
		  	});
	}, []);
	
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
	
	React.useEffect(() => {
		function handleCloseByEsc (evt) {
		  if (evt.key === 'Escape') {
			closeAllPopups();
		  }
		}
			document.addEventListener('keydown', handleCloseByEsc);
		return () => {
			document.removeEventListener('keydown', handleCloseByEsc);
		}
	  }, []);
	
	function handleClickOnBackground(evt) {
		if (evt.target === evt.currentTarget) {
		    closeAllPopups()
		}
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		    api.changeLikeCardStatus(card._id, !isLiked)
		        .then((newCard) => {
			        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
			        setCards(newCards);
		        })
		        .catch((err) => {
			        console.error(err);
		        });
	}

	function handleRemoveCard(card) {
		setIsConfirmPopupOpen(true);
		setSelectedCard(card);
	}
	
	function handleCardDeleteConfirm() {
		api.deleteCard(selectedCard._id)
		    .then(() => {
			    const newCards = cards.filter((c) => c._id !== selectedCard._id);
			    setCards(newCards);
		    })
		    .catch((err) => {
			    console.error(err);
		    });
		closeAllPopups();
	}

	function handleUpdateUser(user) {
		api.setUserInfo(user)
		    .then((user) => {
			    setCurrentUser(user);
		    })
		    .catch((err) => {
			    console.error(err);
		    });
		closeAllPopups();
	}

	function handleUpdateAvatar(user) {
		api.updateAvatar(user)
		    .then((user) => {
			    setCurrentUser(user);
		    })
		    .catch((err) => {
			    console.error(err);
		    });
		closeAllPopups();
	}

	function handleAddPlace (newCard) {
		api.addNewCard(newCard)
		    .then((newCard) => {
			    setCards([newCard, ...cards]);
		    })
		    .catch((err) => {
			    console.error(err);
		    });
		closeAllPopups();
	}

  	function closeAllPopups() {
    	setIsEditProfilePopupOpen(false);
    	setIsAddPlacePopupOpen(false);
    	setIsEditAvatarPopupOpen(false);
    	setIsPhotoPopupOpen(false);
		setIsConfirmPopupOpen(false);
  	}

  	return (
		<div className="page">
			<CurrentUserContext.Provider value={currentUser}>
		  	<Header />
		  	<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
				onCardLike={handleCardLike}
				onCardDelete={handleRemoveCard}
				cards={cards}
		  	/>
		  	<EditProfilePopup
          		isOpen={isEditProfilePopupOpen}
				onCloseOverlay={handleClickOnBackground}
          		onClose={closeAllPopups}
				onUpdateUser={handleUpdateUser}
        	/>
			<EditAvatarPopup
          		isOpen={isEditAvatarPopupOpen}
				onCloseOverlay={handleClickOnBackground}
          		onClose={closeAllPopups}
          		onUpdateAvatar={handleUpdateAvatar}
        	/>
		  	<AddPlacePopup
			    isOpen={isAddPlacePopupOpen}
			    onCloseOverlay={handleClickOnBackground}
			    onClose={closeAllPopups}
			    onAddPlace={handleAddPlace}
			/>
		  	<ImagePopup
				card={selectedCard}
				onCloseOverlay={handleClickOnBackground}
				isOpen={isPhotoPopupOpen}
				onClose={closeAllPopups}
		  	/>
			  <ConfirmPopup
          		isOpen={isConfitmPopupOpen}
          		onClose={closeAllPopups}
          		onCloseOverlay={handleClickOnBackground}
          		onConfirmDelete={handleCardDeleteConfirm}
        	/>
		  	<Footer />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
