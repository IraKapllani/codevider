import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnimalPopup = ({ show, onHide, animal }) => {
	if (!animal) {
		return null;
	}

	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>{animal.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={animal.image} alt={animal.name} className="img-fluid mb-3" />
				<p><strong>ID:</strong> {animal.id}</p>
				<p><strong>Name:</strong> {animal.name}</p>
				<p><strong>Weight:</strong> {animal.weight_kg}</p>
				<p><strong>Height:</strong> {animal.height_cm}</p>
				<p><strong>Species:</strong> {animal.species}</p>
				<p><strong>Family:</strong> {animal.family}</p>
				<p><strong>Place of Found:</strong> {animal.place_of_found}</p>
				<p><strong>Diet:</strong> {animal.diet}</p>
				<p><strong>Description:</strong> {animal.description}</p>
				<p><strong>Additional Info:</strong> {animal.additionalInfo}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AnimalPopup;