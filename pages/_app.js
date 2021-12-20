import Script from "next/script"
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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

        gtag('config', 'G-W9VWRHKQ74');
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
