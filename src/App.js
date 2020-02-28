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
				<nav className="navbar fixed-top navbar-light">
					<NavLink exact activeClassName="active-link" className="navbar-brand" to="/">
						<img src={logo} width="50" height="50" alt="" />
					</NavLink>
					<ul className="nav justify-content-end">
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
				</nav>

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
