import React, { Component } from 'react';

// styles
import styles from './Contact.module.css';

export default class Contact extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.contact}`}>Contact</div>
		)
	}
}
