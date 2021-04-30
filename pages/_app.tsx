import Head from 'next/head'
import Header from '../scr/atoms/Header'
import Footer from '../scr/atoms/Footer'
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
