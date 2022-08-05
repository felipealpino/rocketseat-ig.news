import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.us.fauna.com', // adicionado por causa do error de permissão 
});
