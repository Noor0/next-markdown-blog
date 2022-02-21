import React from "react"
import Script from "next/script"
import { useRouter } from 'next/router'

import Header from '../components/Header'
import '../styles/globals.css'

const handleRouteChange = (url, opts) => {
  if (!process.browser) return;
  if (!window.gtag) console.error("gtag not found")
  window.gtag("event", "page_view", {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => router.events.off("routeChangeComplete", handleRouteChange)
  }, [router.events])

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W9VWRHKQ74" />
      <Script strategy="afterInteractive" src="https://www.googleoptimize.com/optimize.js?id=OPT-5CNL7DD" />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W9VWRHKQ74', { page_path: window.location.pathname });
        `}}
      />
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
