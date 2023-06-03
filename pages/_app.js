import "@/styles/globals.css";

import { useEffect, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<UserProvider>
			<div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
				<Navbar />
				<Component {...pageProps} />
			</div>
		</UserProvider>
	);
}
