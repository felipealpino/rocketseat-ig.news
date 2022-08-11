import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import s from './styles.module.scss';

type SubscripeButtonProps = {
  priceId: string;
};

const SubscribeButton: React.FC<SubscripeButtonProps> = ({ priceId }) => {
  const { data: session } = useSession();

  async function handleSubscribe() {
    try {
      if (!session) {
        signIn('github');
        return;
      }

      const response = await api.post('/subscribe', { session });
      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
      
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <button type="button" className={s.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
};

export { SubscribeButton };
