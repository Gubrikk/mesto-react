import headerLogo from './images/Vector-logo.svg';

function App() {
  return (
    <div className="page">

    	<header className="header">
        	<img className="header__logo" src={headerLogo} alt="Место России" />
    	</header>

    	<main className="main">
    		<section className="profile">
        		<div className="profile__avatar">
            		<img className="profile__avatar-ellipse" src="<%=require('./images/image.jpg')%>" alt="Фото" />
            		<button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар"></button>
        		</div>
        		<div className="profile__info">
            		<div className="profile__name-container">
                		<h1 className="profile__name">Жак-Ив Кусто</h1>
                		<button type="button" aria-label="Edit" className="profile__edit-button"></button>
            		</div>
            		<p className="profile__job">Исследователь океана</p>
        		</div>
        		<button type="button" aria-label="Add" className="profile__add-button"></button>
    		</section>
    	<section className="elements">

    	</section>
    	</main>

    	<footer className="footer">
        	<p className="footer__copyright">© 2020 Mesto Russia</p>
    	</footer>

    	<div className="popup popup_profile-edit">
        	<form className="popup__container popup__container_profile-edit" name="popup__container_profile-edit">
            	<button type="button" aria-label="Close" className="popup__close-icon popup__close-icon_profile-edit"></button>
            	<h2 className="popup__title">Редактировать профиль</h2>
            	<input  type="text"
                    	className="popup__field popup__field-name"
                    	id="name"
                    	name="name"
                    	placeholder="Имя"
                    	minlength="2"
                    	maxlength="40"
                    	required />
            	<span id="name-error" className="error"> </span>
            	<input  type="text"
                    	className="popup__field popup__field-job"
                    	id="job"
                    	name="job"
                    	placeholder="Интересы"
                    	minlength="2"
                    	maxlength="200"
                    	required />
            	<span id="job-error" className="error"> </span>
            	<button type="submit" className="popup__submit-button">Сохранить</button>
        	</form>
    	</div>

    	<div className="popup popup_image">
        	<div className="popup__preview">
            	<button type="button" className="popup__close-icon popup__close-icon_image"></button>
            	<img alt=" " src=" " className="popup__preview-image" />
            	<p className="popup__preview-text"></p>
       		</div>
    	</div>

    	<div className="popup popup_edit-profile-avatar">
        	<form className="popup__container popup__container_edit-profile-avatar" name="edit-profile-avatar">
            	<button type="button" aria-label="Close" className="popup__close-icon popup__close-icon_edit-profile-avatar"></button>
            	<h5 className="popup__title">Обновить аватар</h5>
            	<input  id="avatar-edit" 
                    	type="url" 
                    	name="avatar-edit" 
                    	className="popup__field popup__field_avatar" 
                    	placeholder="Ссылка на картинку"
                    	value="" 
                    	autocomplete="off" 
                    	required />
            	<span id="avatar-edit-error" className="error"></span>
            	<button type="submit" className="popup__submit-button">Сохранить</button>
        	</form>
    	</div>

    	<div className="popup popup_add-card">
        	<form className="popup__container popup__container_new-place" name="popup__container_new-place">
            	<button type="button" aria-label="Close" className="popup__close-icon popup__close-icon_new-place"></button>
            	<h2 className="popup__title">Новое место</h2>
            	<input  type="text"
                    	className="popup__field popup__field_new-place"
                    	id="new-place"
                    	name="new-place"
                    	placeholder="Название"
                    	minlength="2"
                    	maxlength="30"
                    	value=""
                    	required />
            	<span id="new-place-error" className="error"> </span>
            
            	<input  type="url"
                    	className="popup__field popup__field_link-image"
                    	id="link-image"
                    	name="link-image"
                    	placeholder="Ссылка на картинку"
                    	value=""
                    	required />
            	<span id="link-image-error" className="error"> </span>
            	<button type="submit" className="popup__submit-button">Создать</button>
        	</form>
    	</div>

    	<div className="popup popup_delete-card">
        	<form className="popup__container popup__container_delete-card" name="delete-card">
            	<button type="button" aria-label="Close" className="popup__close-icon popup__close-icon_delete-card"></button>
            	<h5 className="popup__title">Вы уверены?</h5>
            	<button type="submit" className="popup__submit-button">Да</button>
        	</form>
    	</div>
	</div>
  );
}

export default App;
