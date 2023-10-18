import type { AppProps } from 'next/app';
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';



export default function App({ Component, pageProps }: AppProps) {

    const onError = (error: Error) => {
        console.log('error', error);
    };

    const handleContentCMS = () => {

    }

    useEffect(() => {

    }, []);
    return <Component {...pageProps} />
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: []
        }
    };
}
