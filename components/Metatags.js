import Head from 'next/head';

export default function Metatags({
  title = 'Next js and Firebase blog',
  description = 'Next.js + Firebase ancrit',
  image = 'https://kvn.netlify.app/cirno%20(2).jpg',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@fireship_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
