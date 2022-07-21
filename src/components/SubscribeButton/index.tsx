import React from 'react';
import s from './styles.module.scss';

const SubscribeButton: React.FC = () => {
  return (
    <button type="button" className={s.subscribeButton}>
      Subscribe now
    </button>
  );
};

export { SubscribeButton };
