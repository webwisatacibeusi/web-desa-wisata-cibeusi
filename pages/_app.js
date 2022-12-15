import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme/';
import NextNProgress from 'nextjs-progressbar';

import '@fontsource/inter';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Desa Wisata Cibeusi</title>
      </Head>
      <ChakraProvider theme={theme}>
        <NextNProgress
          color='#31503E'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
