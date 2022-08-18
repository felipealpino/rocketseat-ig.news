import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import Stripe from 'stripe';
import { stripe } from '../../services/stripe';
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
  }

  res.status(200).json({ received: true });
};
