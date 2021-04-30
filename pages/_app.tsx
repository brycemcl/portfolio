import Head from 'next/head'
import Header from '../src/atoms/Header'
import Footer from '../src/atoms/Footer'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Change me</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`flex flex-col`} style={{ height: '100%' }}>
        <Header />
        <div className={`content flex-grow`}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
