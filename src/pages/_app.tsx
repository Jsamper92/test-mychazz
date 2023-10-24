import graphQLClient from '@/sanity/lib/client/apollo';
import { store } from '@/store/store';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import LocaleContext from '../context/LocaleContext';
import '../styles/library/scss/abstracts.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState('es'); // Valor inicial, por ejemplo 'es'

  useEffect(() => { }, []);

  return (
    <ApolloProvider client={graphQLClient}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>

      </LocaleContext.Provider>
    </ApolloProvider>
  )
}
