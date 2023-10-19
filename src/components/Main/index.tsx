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
        placeholder="blur"
        layout="fill"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
          zIndex: '-1000',
        }}
      />

      <Image
        src="/logo_chazz.png"
        alt="logo"
        style={{
          paddingLeft: '50px',
        }}
      />

      <div>
        <p>PRUEBA DE RECUPERACION DE INFORMACION DEL BACK</p>
        {data.allAuthor.map(({ title, name, language, _type, _id }: any) => {

          return (
            <div style={{ border: '1px solid black', margin: 5 }} key={_id}>
              <p>
                <strong>key literal:</strong>
                {title}
              </p>
              <p>
                <strong>typename:</strong>
                {_type}
              </p>
              <p>
                <strong>id:</strong>
                {_id}
              </p>
              <p>
                <strong>language:</strong>
                {Object.entries(name).map((item: any, index) => {
                  const [key, value] = item;
                  return (
                    <li key={index}>
                      <strong>{key}</strong>: {value}
                    </li>
                  )
                })}
              </p>
            </div>
          )
        })}
      </div>

    </>
  );
}

export default Main;
