import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
