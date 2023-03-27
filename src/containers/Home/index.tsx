import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<span className={styles.firstText}>I&apos;m a</span>
			<ul className={styles.secTexts}>
				<li className={styles.item}>
					<span>Developer</span>
				</li>
				<li className={styles.item}>
					<span>Freelancer</span>
				</li>
			</ul>
		</div>
	);
}
