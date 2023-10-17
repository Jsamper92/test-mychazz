import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { GetStaticPropsContext } from 'next';



export default function App({ Component, pageProps }: AppProps) {

    const onError = (error: Error) => {
        console.log('error', error);
    };
    return (
        <NextIntlClientProvider locale='es' onError={onError} messages={{test: 'test'}}>
            <Component {...pageProps} />
        </NextIntlClientProvider>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: []
        }
    };
}
