/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SubscribeButton } from '../SubscribeButton';
import s from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <main className={s.contentContainer}>
      <section className={s.hero}>
        <span>👏 Hey, welcome</span>
        <h1>
          News about the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span> for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
};

export { Home };
