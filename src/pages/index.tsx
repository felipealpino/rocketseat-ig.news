import React, { Fragment } from 'react';
import s from '../styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      
      <div className={s.teste}>
        Hello <span>World</span>
      </div>
    </Fragment>
  );
}
