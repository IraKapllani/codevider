import React, { useEffect } from 'react';
import "../../assets/styles.css";

const AnimalsList = ({ animals }) => {
	console.log('here');

	useEffect(() => {
		console.log('Animals in AnimalsList:', animals);
	}, [animals]);

	if (!Array.isArray(animals)) {
		return null;
	}

	return (
		<>
			<div className="animal-list">
				{animals.map((animal) => (
					<div key={animal.id} className="fa-card">
						<div className="fa-card-content">
							<p className="fa-card-title">{animal.name}</p>
							<p className="fa-card-description">{animal.origin}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default AnimalsList;
