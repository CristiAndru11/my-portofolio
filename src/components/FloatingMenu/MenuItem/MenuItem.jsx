import React from 'react';

// styles
import styles from './MenuItem.module.css';

const MenuItem = ({ icon, text, onClick }) => {
	return (
		<div className={styles.menuItem} onClick={onClick}>
			<i><img className={styles.itemImage} src={icon} alt={text} /></i>
			<span className={styles.label}>{text}</span>
		</div>
	)
}

export default MenuItem;
