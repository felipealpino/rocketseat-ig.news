/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { SignInButton } from '../SignInButton';
import s from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={s.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};

export { Header };
