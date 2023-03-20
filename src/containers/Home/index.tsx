import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>I&apos;m a</div>
			<ul className={styles.list}>
				<li>
					<span>Youtuber</span>
				</li>
				<li>
					<span>Developer</span>
				</li>
				<li>
					<span>Freelancer</span>
				</li>
			</ul>
		</div>
	);
}
