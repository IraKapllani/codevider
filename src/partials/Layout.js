import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {
	return (
		<div className="d-flex flex-column">
			<Header/>
			<div className="d-flex justify-content-center align-items-center">
				{children}
			</div>
			<Footer/>
		</div>

	);
};

export default Layout;
