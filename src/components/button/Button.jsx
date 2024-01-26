// Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, label = "Button" }) => {
	return (
		<button className={styles.button} onClick={onClick} onKeyUp={onClick}>
			{label}
		</button>
	);
};

export default Button;
