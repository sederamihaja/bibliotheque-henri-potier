import Head from 'next/head';
import Navbar from 'components/Navbar/Navbar';
import 'styles/css/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bibliothèque d'Henri Potier</title>
        <meta name="description" content="La bibliothèque d'Henri Potier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
