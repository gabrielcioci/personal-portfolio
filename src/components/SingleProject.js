import React, { Component } from 'react';
import '../SCSS/SingleProject.scss';

class SingleProject extends Component {
	state = {};
	render() {
		return (
			<div className="project-main">
				<div className="project-title">{this.props.title}</div>
				<div className="project-image">
					<img alt="featured" src={this.props.featureImage} />
					<div className="project-techs">{this.props.tech}</div>
				</div>
				<div className="project-buttons">
					<a target="_blank" rel="noopener noreferrer" href={this.props.github}>
						<button>Github</button>
					</a>
					<a target="_blank" rel="noopener noreferrer" href={this.props.demo}>
						<button>Live demo</button>
					</a>
				</div>
			</div>
		);
	}
}

export default SingleProject;
