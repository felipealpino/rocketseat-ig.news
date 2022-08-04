import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import s from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton: React.FC = () => {
  const { data: session } = useSession();

  return session ? (
    <button type="button" className={s.signInButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={s.closeIcon} onClick={() => signOut()} />
    </button>
  ) : (
    <button onClick={() => signIn('github')} type="button" className={s.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};

export { SignInButton };
