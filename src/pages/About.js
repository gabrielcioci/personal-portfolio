import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Socials from '../components/Socials';
import '../SCSS/About.scss';
import pdf from '../assets/ciocigabriel-cv.pdf';

class About extends Component {
	state = {};
	render() {
		return (
			<div className="About container ">
				<div className="row">
					{/*=================================== Start Introduction Section =====================================*/}
					<div className="col-sm-12 col-md-6 introduction">
						<h1>
							Hi I'm <span className="highlight">Gabriel.</span>
							<br /> Nice to meet ya!
						</h1>
						<p>
							I'm a <span className="highlight">Frontend Developer</span>
							<br /> with a passion for working on life-changing projects.
						</p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							<button className="CV">View CV</button>
						</a>
					</div>
					{/*=================================== End Introduction Section =====================================*/}

					{/*=================================== Start Socials Section ========================================*/}
					<div className="col-sm-12 col-md-6 right-side">
						<h2>
							Let's <span className="highlight">connect</span>
						</h2>
						<ReactRotatingText
							className="console-text"
							color="white"
							items={[
								'console.log("Hello World!")',
								'System.out.println("Hello World!")',
								'printf("Hello World!")',
								'cout<<"Hello World!"'
							]}
						/>
						<Socials github="true" linkedin="true" behance="true" dribbble="true" />
					</div>
					{/*=================================== End Socials Section =========================================*/}
				</div>
			</div>
		);
	}
}

export default About;
