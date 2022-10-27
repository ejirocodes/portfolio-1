import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavMain } from "../components/navigation/NavMain";
import { Footer } from "../components/shared/Footer";
import { NavProvider } from "../context/navContext";
import { gsap } from "gsap/dist/gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import Head from "next/head";

gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <Head>
        <title>
          Ejiro Asiuwhu - Product Engineer, Frontend Engineer JavaScript
          Developer and Technical Writer.
        </title>
        <meta
          name="description"
          content="Ejiro Asiuwhu is a Frontend Engineer and JavaScript developer highly skilled in building complex interactive applications with JavaScript and TypeScript, scalable design patterns, advanced web components architectures and progressively enhanced web applications."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Ejiro Asiuwhu: Software Engineer (Frontend)."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ejiro Asiuwhu" />
        <meta property="og:url" content="https://ejiro.dev" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMain />
      <div className="md:mt-[100px] mt-[70px]">
        <Component {...pageProps} />
        <Footer />
      </div>
    </NavProvider>
  );
}

export default MyApp;
