import React from "react";

function Card (props) {
	function handleImageClick() {
    	props.onCardClick(props);
	}

  	function handleCardDelete() {
    	props.onRemoveCard(props);
  	}

  	return (
    	<article className="element">
        	<button type="button" className="element__trash" onClick={handleCardDelete}/>
        	<img className="element__image" src={props.link} alt={props.name} onClick={handleImageClick}/>
        	<div className="element__title">
            	<h3 className="element__name">{props.name}</h3>
            	<div className="element__info">
                	<button type="button" className="element__info-like"></button>
                	<p className="element__info-like-counter">{props.likes.length}</p>
            	</div>
        	</div>
    	</article>
  	);
}

export default Card;