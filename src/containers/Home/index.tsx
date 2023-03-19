import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.staticText}>I&apos;m a</div>
			<ul className={styles.dynamicText}>
				<li>
					<span>Web Developer</span>
				</li>
				<li>
					<span>React Developer</span>
				</li>
				<li>
					<span>Node.js Developer</span>
				</li>
			</ul>
		</div>
	);
}
