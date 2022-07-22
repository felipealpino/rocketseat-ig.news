import React, { Fragment } from 'react';
import Head from 'next/head';
import { Home } from '../components/Home';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';
interface IProduct {
  priceId: string;
  amount: number;
}
export interface AppProps {
  product: IProduct;
}

export default function App({ product }: AppProps) {
  console.log('🚀 ~ props', product);
  return (
    <Fragment>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Home product={product} />
    </Fragment>
  );
}

// Funções de Server Side Rendering devem estar dentro de pages
// Elas devem ser const porque de dentro do next é possivel importar uma tipagem GetServerSideProps
// Deve ser sempre async mesmo se nao usar o await
// Caso queira passar ela para dentro de componentes, deve ser feito através de props

// getServerSideProps é executado na camada NextJs que é um servidor Node
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LOAARATx0Gz1RDK2YnP5VB0', {
    expand: ['product'], // basicamente um inner join retornando todo o produto
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
  };
};
