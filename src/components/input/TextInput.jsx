// TextInput.js
import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ value, onChange }) => {
	return (
		<input
			type="text"
			className={styles.textInput}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextInput;
