import Document, { Html, Head, Main, NextScript } from 'next/document';

// Executado somente uma vez (semelhante ao index.html do CRA)
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Roboto:ital,wght@0,400;0,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript /> {/*Onde o Next vai colocar os arquivos JS para fazer a aplicação funcionar*/}
        </body>
      </Html>
    );
  }
}
