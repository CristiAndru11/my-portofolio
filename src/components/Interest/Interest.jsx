import React, { Component } from 'react';

// styles
import styles from './Interest.module.css';

export default class Interest extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.interest}`}>Interest</div>
		)
	}
}
