import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.scss';
import logo from './assets/logo.svg';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/*=================================== Start Main Menu =====================================*/}
				<nav className="navbar sticky-top navbar-expand-lg">
					<NavLink exact activeClassName="active-link" className="navbar-brand" to="/">
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
								<NavLink exact activeClassName="active-link" className="nav-link" to="/">
									about
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact activeClassName="active-link" className="nav-link" to="/projects">
									projects
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact activeClassName="active-link" className="nav-link" to="/contact">
									contact
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>;
				{/*=================================== End Main Menu =====================================*/}
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
