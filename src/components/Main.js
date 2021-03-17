import React from 'react';
import Card from './Card';
import api from '../utils/api.js'


function Main(props) {

	const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api
			.getUserInfo()
			.then((result) => {
		  		setUserName(result.name);
		  		setUserDescription(result.about);
		  		setUserAvatar(result.avatar);
			})
			.catch((err) => {
				console.log(err);
			});

		api.getInitialCards()
			.then((result) => {
				setCards(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

    return (
        <main className="main">
    		<section className="profile">
        		<div className="profile__avatar">
            		<img className="profile__avatar-ellipse" src={userAvatar} alt="Фото" />
            		<button className="profile__avatar-edit-button" 
							type="button" 
							aria-label="Редактировать аватар" 
							onClick={props.onEditAvatar}>
					</button>
        		</div>
        		<div className="profile__info">
            		<div className="profile__name-container">
                		<h1 className="profile__name">{userName}</h1>
                		<button className="profile__edit-button"
								type="button" 
								aria-label="Edit"  
								onClick={props.onEditProfile}>
						</button>
            		</div>
            		<p className="profile__job">{userDescription}</p>
        		</div>
        		<button className="profile__add-button"
						type="button" 
						aria-label="Add" 
						onClick={props.onAddPlace}>
				</button>
    		</section>

    		<section className="elements">
				{cards.map((card) =>
                  	<Card
                    	key={card._id}
						link={card.link}
						likes={card.likes}
						name={card.name}
                    	onCardClick={props.onCardClick}
						onRemoveCard={props.onRemoveCard}
                  	/>
                )}
			</section>
    	</main>
    );
}

export default Main;