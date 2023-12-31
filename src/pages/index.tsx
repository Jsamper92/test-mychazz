
import Layout from '@/components/cdk/Layout';
import Main from '@/components/cdk/Main';
import { GetStaticPropsContext } from 'next';

export default function Page(props: { [key: string]: string }) {
    const { locale, } = props;

    return <>
        <Layout params={{ locale }}>
            <Main />
        </Layout>
    </>
}

export async function getServerSideProps(props: GetStaticPropsContext) {
    const { locale, locales, params } = props;

    return {
        props: {
            locale,
            locales,
            test: params || null,
        },
    };
}