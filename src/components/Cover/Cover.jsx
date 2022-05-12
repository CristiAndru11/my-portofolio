import React, { Component } from 'react';

// styles
import styles from './Cover.module.css';

export default class Cover extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.cover}`}>Cover</div>
		)
	}
}
