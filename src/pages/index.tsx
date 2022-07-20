import React, { Fragment } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <Header />
    </Fragment>
  );
}
