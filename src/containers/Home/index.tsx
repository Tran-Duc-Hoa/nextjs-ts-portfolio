import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.staticText}>I&apos;m a</div>
			<ul className={styles.dynamicText}>
				<li>
					<span>Developer</span>
				</li>
				<li>
					<span>Engineer</span>
				</li>
				<li>
					<span>Designer</span>
				</li>
				<li>
					<span>Marketer</span>
				</li>
			</ul>
		</div>
	);
}
