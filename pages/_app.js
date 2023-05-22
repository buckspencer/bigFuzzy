import "@/styles/globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
	return (
		<GoogleOAuthProvider
			clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
		>
			<Navbar />
			<Component {...pageProps} />
		</GoogleOAuthProvider>
	);
}
