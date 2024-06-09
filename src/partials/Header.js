import React from "react";

const Header = () => {
	return <nav className="navbar navbar-expand-lg bg-body-secondary">
		<div className="container">
			<a className="navbar-brand fw-bolder" href="#" style={{fontSize: "30px"}}>PET EXPO</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
							aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul className="navbar-nav fw-bold text-dark">
					<li className="nav-item">
						<a className="nav-link" aria-current="page" href="#">Home</a>
					</li>
					<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Categories
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Birds</a></li>
									<li><a className="dropdown-item" href="#">Cats</a></li>
									<li><a className="dropdown-item" href="#">Dogs</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</ul>
			</div>
		</div>
	</nav>
}

export default Header;