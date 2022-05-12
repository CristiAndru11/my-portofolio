import React, { Component } from 'react';

// styles
import styles from './Education.module.css';

export default class Education extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.education}`}>Education</div>
		)
	}
}
