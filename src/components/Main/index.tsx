import Link from 'next/link';
import React, { ReactPortal } from 'react';
import { useTranslations } from 'next-intl';

function Main() {
  const t = useTranslations();

  return (
    <>
      <Link href="/detail">
        {t('hola.chazz')}
      </Link>
      <Image src="/fondo.png" alt="me" />
    </>
  );
}

export default Main;
