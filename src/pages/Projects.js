import React, { Component } from 'react';
import SingleProject from '../components/SingleProject.js';
import '../SCSS/Projects.scss';

import slots from '../assets/slot-machine.png';
import lightsout from '../assets/lightsout.png';
import pathfinding from '../assets/pathfinding.png';
import quotes from '../assets/quotes.png';

class Projects extends Component {
	state = {};
	render() {
		return (
			<div className="Projects container">
				<div className="row">
					<h1>
						Check out my <span className="highlight">projects</span>
					</h1>
					<div className="projects-container">
						<SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="Slot Machine"
							featureImage={slots}
							tech="ReactJS, JSX, HTML, SASS"
							github="https://github.com/gabrielcioci/slot-machine"
							demo="https://gabrielcioci.github.io/slot-machine/"
						/>
						<SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="LightsOut"
							featureImage={lightsout}
							tech="ReactJS, JSX, HTML, CSS"
							github="https://github.com/gabrielcioci/lightsout-game"
							demo="https://gabrielcioci.github.io/lightsout-game/"
						/>
						<SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="Random Quote"
							featureImage={quotes}
							tech="ReactJS, HTML, SASS, API"
							github="https://github.com/gabrielcioci/random-quotes"
							demo="https://gabrielcioci.github.io/random-quotes/"
						/>
						{/* <SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="Pathfinding A*"
							featureImage={pathfinding}
							tech="HTML, P5, CSS"
							github="https://github.com"
							demo="https://google.ro"
						/> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
