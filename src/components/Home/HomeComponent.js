import React, {useEffect, useState} from "react";
import "../../assets/styles.css";
import PetsIcon from '@mui/icons-material/Pets';
import {fetchFeaturedAnimal} from "../../utils/plugins/api";
import FeaturedAnimal from "./FeaturedAnimals";
import image from "../../assets/images/image2.jpg";
import ContactUs from "./ContactUs";

const HomeComponent = () => {
	const [featuredDog, setFeaturedDog] = useState(null);
	const [featuredCat, setFeaturedCat] = useState(null);
	const [featuredBird, setFeaturedBird] = useState(null);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const featuredDog = await fetchFeaturedAnimal('dogs');
			const featuredCat = await fetchFeaturedAnimal('cats');
			const featuredBird = await fetchFeaturedAnimal('birds');

			setFeaturedDog(featuredDog);
			setFeaturedCat(featuredCat);
			setFeaturedBird(featuredBird);

			setLoading(false);
		};

		fetchData()
	}, []);

	if (loading) {
		return <div className="loader">
			<div className="dot-one"></div>
			<div className="dot-two">- -</div>
			<div className="dot-three"></div>
		</div>;
	}

	return <div>
		<div className="py-5 text-center bg-body-secondary">
			<PetsIcon fontSize="large"/>
			<h1 className="display-5 fw-bold text-body-emphasis">PET EXPO</h1>
			<div className="col-lg-6 mx-auto">
				<p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
					in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
					<button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
				</div>
			</div>
		</div>

		{/*Featured Animals*/}
		<div>
			<div className="container my-lg-5 pt-3 pb-3">
				<h2 className="text-white pb-3">Featured Animals Of The Week</h2>
				<div className="row justify-content-lg-between pt-4">
					<div className="col-12 col-sm-6 col-md-4 mb-4">
						<div className="d-flex justify-content-center">
							<FeaturedAnimal animal={featuredDog} category="Dog"/>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-4 justify-content-center">
						<div className="d-flex justify-content-center">
							<FeaturedAnimal animal={featuredCat} category="Cat"/>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-4 justify-content-center">
						<div className="d-flex justify-content-center">
							<FeaturedAnimal animal={featuredBird} category="Bird"/>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/*About Us*/}
		<div className="d-flex justify-content-between bg-body-secondary">
			<div className="row container-fluid py-5">
				<div className="col-lg-6">
					<div className="d-flex justify-content-center">
						<img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="400"
								 loading="lazy"/>
					</div>
				</div>
				<div className="col-lg-5 mt-5">
					<h1 className="display-5 fw-bold text-body-emphasis lh-1">About Us</h1>
					<p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
						most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
						extensive prebuilt components, and powerful JavaScript plugins.</p>
				</div>
			</div>
		</div>

		{/*Contact*/}
		<ContactUs/>
	</div>
}

export default HomeComponent;