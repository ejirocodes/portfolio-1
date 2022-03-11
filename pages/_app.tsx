import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavMain } from "../components/navigation/NavMain";
import { Footer } from "../components/shared/Footer";
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'

// gsap.registerPlugin(CSSPlugin)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavMain />
      <div className="mt-[100px]">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
