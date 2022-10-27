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
        <meta property="og:title" content="Ejiro Asiuwhu: Software Engineer." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ejiro Asiuwhu" />
        <meta property="og:url" content="https://ejiro.dev" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.png" />

        {/* Twitter   */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ejiro Asiuwhu - Product Engineer, Frontend Engineer JavaScript
          Developer and Technical Writer."
        />
        <meta
          name="twitter:description"
          content="Ejiro Asiuwhu is a Product Engineer, Frontend Engineer JavaScript
          Developer and Technical Writer."
        />
        <meta name="twitter:site" content="@ejirocodes" />
        <meta name="twitter:creator" content="@ejirocodes" />
        <meta name="twitter:url" content="https://ejiro.xyz" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/ejiro/image/upload/v1654204394/portfolio-site/ejiro-asiuwhu_xcd2qx.png"
        />

        <meta
          property="og:title"
          content="Ejiro Asiuwhu is a product-focused Software
              Engineer with a drive for building meaningful products that people
              love using."
        />
        <meta name="author" property="og:author" content="Ejiro Asiuwhu" />
        <meta name="author" content="Ejiro Asiuwhu" />

        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/ejiro/image/upload/v1654204394/portfolio-site/ejiro-asiuwhu_xcd2qx.png"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ejiro/image/upload/v1654204394/portfolio-site/ejiro-asiuwhu_xcd2qx.png"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ejiro Asiuwhu" />
        <meta name="og:url" content="https://ejiro.xyz" />

        <meta property="og:url" content="https://ejiro.xyz" />
        <meta name="og:email" content="ejiroasiuwhu10@gmail.com" />

        <meta
          property="og:description"
          content="Ejiro Asiuwhu is a Product Engineer, Frontend Engineer JavaScript
          Developer and Technical Writer."
        />
        <meta name="application-name" content="Ejiro Asiuwhu" />
        <meta name="og:country-name" content="Nigeria" />
        <meta
          name="keywords"
          content="Product Engineer, Software Engineer, Frontend Engineer, JavaScript Developer, TypeScript, React, Vue, NuxtJS, Nextjs"
        />
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
