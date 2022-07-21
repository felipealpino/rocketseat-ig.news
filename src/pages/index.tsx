import React, { Fragment } from 'react';
import Head from 'next/head';
import { Home } from '../components/Home';

export default function App() {
  return (
    <Fragment>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Home />
    </Fragment>
  );
}
