import "@/styles/globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  return;
  <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
    <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
      <div className="flex gap-6 md:gap-20">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  </GoogleOAuthProvider>;
}
