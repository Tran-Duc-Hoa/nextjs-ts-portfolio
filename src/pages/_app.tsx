import type { AppProps } from "next/app";

import NavBar from "@/layout/NavBar";
import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<main className="main">
				<Component {...pageProps} />
			</main>
		</>
	);
}
