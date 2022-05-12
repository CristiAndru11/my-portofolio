import React, { Component } from 'react';

// styles
import styles from './Services.module.css';

export default class Services extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.services}`}>Services</div>
		)
	}
}
