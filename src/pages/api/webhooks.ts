import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import Stripe from 'stripe';
import { stripe } from '../../services/stripe';
import { saveSubscription } from './_lib/manageSubscription';
//stripe listen --forward-to localhost:3000/api/webhooks

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set(['checkout.session.completed']);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
  const secret = req.headers['stripe-signature'];
  let event: Stripe.Event;

  const buf = await buffer(req);

  try {
    event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  const { type } = event;

  if (relevantEvents.has(type)) {
    console.log('Evento Recebid => ', event);

    try {
      switch (type) {
        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          await saveSubscription(String(checkoutSession.subscription), String(checkoutSession.customer));
          
          break;
        default:
          throw new Error('Unhandled event.');
      }
    } catch (error) {
      return res.json({ error: 'Webhook handler failed' });
    }
  }

  res.status(200).json({ received: true });
};
