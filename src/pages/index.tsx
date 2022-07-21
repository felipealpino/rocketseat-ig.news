import React, { Fragment } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Home } from '../components/Home';

export default function App() {
  return (
    <Fragment>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Header />
      <Home />
    </Fragment>
  );
}
