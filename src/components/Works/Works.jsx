import React, { Component } from 'react';

// styles
import styles from './Works.module.css';

export default class Works extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.works}`}>Works</div>
		)
	}
}
