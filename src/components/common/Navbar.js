import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'; // Import the CSS file



const Navbar = () => {
	// const toggleMenu = () => {
	// 	setShowMenu(!showMenu);
	//   };
	return (
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
					DKTE
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
							>
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
							>
								CRUDs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
							>
								Grid View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
							>
								List View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/curds/adminnew"
							>
								admin
								

							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/curds/cgpaFilter">
								CGPA view
								

							</NavLink>
						</li>

						{/* <li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/curds/CrudDetailAdmin">
								admin view
								

							</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
		//  {/* Navigation start */}
   
		//  <nav>
      /* <img src="img/logo.svg" className="logo" alt="" />

      <div className="navigation">
        <ul className={showMenu ? 'active' : ''}>
          <i id="menu-close" className="fas fa-times" onClick={toggleMenu}></i>
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="courses.html">Courses</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>

        <img src="img/menu.png" id="menu-btn" alt="" onClick={toggleMenu} />
      </div> */
    // </nav>
	);
};

export default Navbar;
