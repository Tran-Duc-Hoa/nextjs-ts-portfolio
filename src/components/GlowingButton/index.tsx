import React from "react";
import classes from "./styles.module.scss";

const GlowingButton = () => {
	const style = { "--clr": "#1e9bff" } as React.CSSProperties;

	return (
		<a href="#" style={style} className={classes.btn}>
			<span className={classes.span}>Button</span>
			<i className={classes.item}></i>
		</a>
	);
};

export default GlowingButton;
