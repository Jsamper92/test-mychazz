import type { AppProps } from 'next/app';
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';
import '../styles/library/scss/abstracts.scss';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  return <Component {...pageProps} />;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: [],
    },
  };
}
