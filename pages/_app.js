import "@/styles/globals.css";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<UserProvider>
			<div className="bg-fuzzy-blue">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</UserProvider>
	);
}
