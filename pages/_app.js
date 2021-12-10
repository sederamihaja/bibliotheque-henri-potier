import { useEffect } from 'react';
import Head from 'next/head';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Navbar from 'components/Navbar/Navbar';
import { EventEmitter } from "providers/eventEmitter";
import 'styles/css/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof window !== "undefined") {
  require('bootstrap/dist/js/bootstrap.min.js');
}

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    EventEmitter.emit("localStorage");
  }, [])

  return (
    <>
      <Head>
        <title>Bibliothèque d&apos;Henri Potier</title>
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
