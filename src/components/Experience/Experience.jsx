import React, { Component } from 'react';

// styles
import styles from './Experience.module.css';

export default class Experience extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.experience}`}>Experience</div>
		)
	}
}
