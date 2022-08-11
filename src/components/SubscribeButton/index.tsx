import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import s from './styles.module.scss';

type SubscripeButtonProps = {
  priceId: string;
};

const SubscribeButton: React.FC<SubscripeButtonProps> = ({ priceId }) => {
  const { data } = useSession();

  function handleSubscribe() {
    if (!data) {
      signIn('github');
      return;
    }
  }

  return (
    <button type="button" className={s.subscribeButton}>
      Subscribe now
    </button>
  );
};

export { SubscribeButton };
