import React, { Component } from 'react';

// styles
import styles from './Prices.module.css';

export default class Prices extends Component {
	render = () => {
		return (
			<div ref={this.props.sectionRef} id={this.props.id} className={`${this.props.className} ${styles.prices}`}>Prices</div>
		)
	}
}
