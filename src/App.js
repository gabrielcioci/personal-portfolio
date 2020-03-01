import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './SCSS/App.scss';
import logo from './assets/logo.svg';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/*=================================== Start Main Menu =====================================*/}
				<nav className="navbar sticky-top navbar-expand-lg">
					<NavLink exact activeClassName="active-link" className="navbar-brand" to="/personal-portfolio/">
						<img src={logo} width="50" height="50" alt="" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="mr-auto" />
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="active-link"
									className="nav-link"
									to="/personal-portfolio/"
								>
									about
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="active-link"
									className="nav-link"
									to="/personal-portfolio/projects"
								>
									projects
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="active-link"
									className="nav-link"
									to="/personal-portfolio/contact"
								>
									contact
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				{/*=================================== End Main Menu =====================================*/}
				<div className="mobile-menu">
					<NavLink exact className="mobile-link" to="/personal-portfolio/">
						<i class="far fa-user-circle" />about
					</NavLink>
					<NavLink exact className="mobile-link" to="/personal-portfolio/projects">
						<i class="far fa-clone " />projects
					</NavLink>
					<NavLink exact className="mobile-link" to="/personal-portfolio/contact">
						<i class="far fa-comments" />contact
					</NavLink>
				</div>
				<Switch>
					<Route exact path="/personal-portfolio/" component={About} />
					<Route exact path="/personal-portfolio/projects" component={Projects} />
					<Route exact path="/personal-portfolio/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
