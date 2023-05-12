import "@/styles/globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </GoogleOAuthProvider>
  );
}
