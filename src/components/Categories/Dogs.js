import React, {useState, useEffect} from 'react';
import {fetchDogs} from "../../utils/plugins/api";
import AnimalsList from "./AnimalsList";

const Dogs = () => {
	const [dogs, setDogs] = useState([]);  // Initialize as an empty array
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const dogsData = await fetchDogs();
			setDogs(dogsData)
			setLoading(false);
		};
		fetchData()
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Dogs</h2>
			<div className="row justify-content-lg-between pt-4">
				<div className="col-12 col-sm-6 col-md-4 mb-4">
					<div className="d-flex justify-content-center">
						<AnimalsList animals={dogs}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dogs;