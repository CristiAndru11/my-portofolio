import React, { Component } from 'react';

// styles
import styles from './About.module.css';

export default class About extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.about}`}>About</div>
		)
	}
}
