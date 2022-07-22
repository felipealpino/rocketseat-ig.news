import React from 'react';
import s from './styles.module.scss';

type SubscripeButtonProps = {
  priceId: string;
};

const SubscribeButton: React.FC<SubscripeButtonProps> = ({ priceId }) => {
  return (
    <button type="button" className={s.subscribeButton}>
      Subscribe now
    </button>
  );
};

export { SubscribeButton };
