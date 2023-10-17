import Layout from '@/components/Layout';
import Main from '@/components/Main';
import type { AppProps } from 'next/app';

export default function Page() {
    return <>
        <Layout>
            <Main />
        </Layout>
    </>
}