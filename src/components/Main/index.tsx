import Link from 'next/link';
import Image from 'next/image';
import React, { ReactPortal } from 'react';
import { useTranslations } from 'next-intl';

function Main() {
  const t = useTranslations();

  return (
    <>
      <Link href="/detail">
        {t('hola.chazz')}
      </Link>
      <Image src="/fondo.png" alt="me" fill={true}/>
    </>
  );
}

export default Main;
