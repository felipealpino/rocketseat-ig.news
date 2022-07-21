import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import s from './styles.module.scss';

const SignInButton: React.FC = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={s.signInButton}>
      <FaGithub color="#04d361" />
      Felipe Gontijo
      <FiX color="#737380" className={s.closeIcon} />
    </button>
  ) : (
    <button type="button" className={s.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};

export { SignInButton };
