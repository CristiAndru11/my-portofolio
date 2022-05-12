import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem';

// icons
import homeIcon from '../../assets/menuIcons/home.png';
import aboutIcon from '../../assets/menuIcons/about.png';
import interestIcon from '../../assets/menuIcons/interest.png';
import skillsIcon from '../../assets/menuIcons/skills.png';
import educationIcon from '../../assets/menuIcons/education.png';
import experienceIcon from '../../assets/menuIcons/experience.png';
import worksIcon from '../../assets/menuIcons/works.png';
import servicesIcon from '../../assets/menuIcons/services.png';
import pricesIcon from '../../assets/menuIcons/prices.png';
import contactIcon from '../../assets/menuIcons/contact.png';

// styles
import styles from './FloatingMenu.module.css';

export default class FloatingMenu extends Component {
	scrollTo = id => {
		this.props.refsArray[id].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	render() {
		return (
			<div id={this.props.id} className={`${this.props.className} ${styles.floatingMenu}`}>
				<MenuItem onClick={() => this.scrollTo(0)} icon={homeIcon} text="Home" />
				<MenuItem onClick={() => this.scrollTo(1)} icon={aboutIcon} text="About me" />
				<MenuItem onClick={() => this.scrollTo(2)} icon={interestIcon} text="My interest" />
				<MenuItem onClick={() => this.scrollTo(3)} icon={skillsIcon} text="Skills" />
				<MenuItem onClick={() => this.scrollTo(4)} icon={educationIcon} text="Education" />
				<MenuItem onClick={() => this.scrollTo(5)} icon={experienceIcon} text="Experience" />
				<MenuItem onClick={() => this.scrollTo(6)} icon={worksIcon} text="Works" />
				<MenuItem onClick={() => this.scrollTo(7)} icon={servicesIcon} text="Services" />
				<MenuItem onClick={() => this.scrollTo(8)} icon={pricesIcon} text="Prices" />
				<MenuItem onClick={() => this.scrollTo(9)} icon={contactIcon} text="Contact" />
			</div>
		)
	}
}
