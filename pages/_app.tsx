import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavMain } from "../components/shared/NavMain";
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'

// gsap.registerPlugin(CSSPlugin)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavMain />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
