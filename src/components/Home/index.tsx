/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AppProps } from '../../pages';
import { SubscribeButton } from '../SubscribeButton';
import s from './styles.module.scss';

type HomeProps = AppProps;

const Home: React.FC<HomeProps> = ({ product }) => {
  return (
    <main className={s.contentContainer}>
      <section className={s.hero}>
        <span>👏 Hey, welcome</span>
        <h1>
          News about the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span> for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
};

export { Home };
