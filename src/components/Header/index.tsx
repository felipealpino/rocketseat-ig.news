import React from 'react';
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
      </div>
    </header>
  );
};

export { Header };
