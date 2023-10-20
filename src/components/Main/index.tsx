import Image from 'next/image';
import React from 'react';
import { useQuery } from '@apollo/client';
import graphQLClient from '@/lib/client/apollo';
import { GET_POSTS } from '@/queries/test';



function Main() {
  const { loading, data } = useQuery(GET_POSTS, { client: graphQLClient });

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
        {data.allAuthor.map(({ title, name, _type, _id }: { [key: string]: string }) => {

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
                {Object.entries(name)
                  .map(([key, value]: [string, string], index: number) => (
                    <li key={index}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
              </p>
            </div>
          )
        })}
      </div>

    </>
  );
}

export default Main;
