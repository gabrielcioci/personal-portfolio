import React, { Component } from 'react';
import SingleProject from '../components/SingleProject.js';
import '../SCSS/Projects.scss';

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
							featureImage="https://picsum.photos/400?blur&random=1"
							tech="ReactJS, JSX, HTML, SASS"
							github="https://github.com/gabrielcioci/slot-machine"
							demo=""
						/>
						<SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="LightsOut"
							featureImage="https://picsum.photos/400?blur&random=2"
							tech="ReactJS, JSX, HTML, CSS"
							github="https://github.com/gabrielcioci/lightsout-game"
							demo="https://google.ro"
						/>
						<SingleProject
							className="col-sm-12 col-md-6 col-lg-4 single-project"
							title="Pathfinding A*"
							featureImage="https://picsum.photos/400?blur&random=3"
							tech="HTML, P5, CSS"
							github="https://github.com"
							demo="https://google.ro"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
