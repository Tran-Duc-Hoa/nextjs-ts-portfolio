import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.staticText}>I&apos;m a</div>
			<ul className={styles.dynamicText}>
				<li>
					<span>Lorem, ipsum dolor.</span>
				</li>
				<li>
					<span>Lorem, ipsum.</span>
				</li>
				<li>
					<span>Lorem, ipsum dolor.</span>
				</li>
				<li>
					<span>Lorem ipsum dolor sit.</span>
				</li>
			</ul>
		</div>
	);
}
