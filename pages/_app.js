import Head from 'next/head';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Navbar from 'components/Navbar/Navbar';
import 'styles/css/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bibliothèque d'Henri Potier</title>
        <meta name="description" content="La bibliothèque d'Henri Potier" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <NotificationContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
