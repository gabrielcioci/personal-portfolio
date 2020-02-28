import React, { Component } from 'react';
import './SCSS/Contact.scss';
import Socials from '../components/Socials';

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="Contact">
				<div className="container contact-container">
					<h1>
						Hit me up, I won't <span className="highlight">bite!</span>
					</h1>
					<Socials
						github="true"
						linkedin="true"
						behance="true"
						instagram="true"
						dribbble="true"
						mail="true"
					/>
				</div>
			</div>
		);
	}
}

export default Contact;
