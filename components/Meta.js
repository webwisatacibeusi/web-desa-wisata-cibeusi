import Head from 'next/head';

export const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
        key='og:description'
      />
    </Head>
  );
};
