import React, {useState, useEffect} from 'react';
import {fetchCats} from "../../utils/plugins/api";
import AnimalsList from "./AnimalsList";

const Cats = () => {
	const [cats, setCats] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const catsData = await fetchCats();
			setCats(catsData);
			setLoading(false);
		};
		fetchData()
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Cats</h2>
			<AnimalsList animals={cats}/>
		</div>
	);
};

export default Cats;