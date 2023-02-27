//UI Design by Pablo Cuevas
/**
 Developed in next.js by Pablo Cuevas, this project is for personal use, 
 any public use of it is prohibited. In the event that this code and/or web 
 page is published by a pernosa or company other than arkcorporation.es, 
 it will be reported to the competent authorities.
 */

import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Space</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
