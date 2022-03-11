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
      <div className="mt-[100px]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
