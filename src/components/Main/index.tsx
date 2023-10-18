import Link from 'next/link';
import Image from 'next/image';
import React, { ReactPortal } from 'react';
import { useQuery, gql } from '@apollo/client';
import graphQLClient from '@/lib/client/apollo';
import { GET_POSTS } from '@/queries/test';



function Main() {
  const { loading, error, data } = useQuery(GET_POSTS, { client: graphQLClient });

  if (loading) return <p>Loading...</p>;




  return (
    <>
      <Image
        width={500}
        height={500}
        src="/fondo_chazz.png"
        alt="fondo"
      />
      <div>
        <p>PRUEBA DE RECUPERACION DE INFORMACION DEL BACK</p>
        {data.allAuthor.map(({ name, language, __typename, _id }: any) => {

          return (
            <div style={{ border: '1px solid black', margin: 5 }} key={_id}>
              <p>
                <strong>name:</strong>
                {name}
              </p>
              <p>
                <strong>language:</strong>
                {language}
              </p>
              <p>
                <strong>typename:</strong>
                {__typename}
              </p>
              <p>
                <strong>id:</strong>
                {_id}
              </p>
            </div>
          )
        })}
      </div>

    </>
  );
}

export default Main;
