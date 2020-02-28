import React, { Component } from 'react';

class Socials extends Component {
	render() {
		return (
			<div className="socials">
				{this.props.github && (
					<a href="https://www.github.com/gabrielcioci" target="_blank" rel="noopener noreferrer" >
						<i className="im im-github" />
					</a>
				)}
				{this.props.linkedin && (
					<a href="https://www.linkedin.com/in/ciocigabi/" target="_blank" rel="noopener noreferrer">
						<i className="im im-linkedin" />
					</a>
				)}
				{this.props.behance && (
					<a href="https://behance.net/ciocigabi" target="_blank" rel="noopener noreferrer">
						<i className="im im-behance" />
					</a>
				)}
				{this.props.dribbble && (
					<a href="https://dribbble.com/ciocigabi" target="_blank" rel="noopener noreferrer">
						<i className="im im-dribbble" />
					</a>
				)}
				{this.props.instagram && (
					<a href="https://instagram.com/ciocigabi" target="_blank" rel="noopener noreferrer">
						<i className="im im-instagram" />
					</a>
				)}
				{this.props.mail && (
					<a href="mailto:ciocigabi@gmail.com" target="_blank" rel="noopener noreferrer">
						<i className="im im-mail" />
					</a>
				)}
			</div>
		);
	}
}

export default Socials;
