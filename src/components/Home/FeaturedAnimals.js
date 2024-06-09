import React from 'react';
import "../../assets/styles.css";

const FeaturedAnimal = ({animal, category}) => (
	<div className="fa-card">
		<img src={animal.image} alt="animal pic"/>
		<div className="fa-card-content">
			<p className="fa-card-title">{animal.name}</p>
			<p className="fa-card-description">{animal.description}</p>
		</div>
	</div>
);

export default FeaturedAnimal;