import Head from 'next/head'
import Header from '../scr/atoms/Header'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className={`content`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
