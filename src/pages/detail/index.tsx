import { GetStaticPropsContext } from "next";

export default function Detail({ locale }: { locale: string }) {
  console.log(locale);
  return <div>detail</div>;
}


export async function getServerSideProps(props: GetStaticPropsContext) {
  const { locale } = props;
  return {
    props: {
      locale,
    },
  };
}