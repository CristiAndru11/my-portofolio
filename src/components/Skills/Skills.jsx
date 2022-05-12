import React, { Component } from 'react';

// styles
import styles from './Skills.module.css';

export default class Skills extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.skills}`}>Skills</div>
		)
	}
}
