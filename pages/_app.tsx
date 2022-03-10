import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'

// gsap.registerPlugin(CSSPlugin)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
