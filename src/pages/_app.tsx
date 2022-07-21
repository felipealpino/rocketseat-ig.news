import React, { Fragment } from 'react';
import { AppProps } from '../../node_modules/next/app';
import { Header } from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
