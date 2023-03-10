import Link from "next/link";

import styles from "./styles.module.scss";

const NavBar = () => {
	return (
		<nav id={styles.navBar}>
			<ul>
				<Link href="/" className={styles.navLink}>
					Home
				</Link>
				<Link href="/" className={styles.navLink}>
					Work
				</Link>
				<Link href="/" className={styles.navLink}>
					About Me
				</Link>
				<Link href="/" className={styles.navLink}>
					Contact
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
