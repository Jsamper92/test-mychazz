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
      <div>
        <p>PRUEBA DE RECUPERACION DE INFORMACION DEL BACK</p>
        <p>{data.allPost[0].title}</p>
        <p>{data.allPost[0].__typename}</p>
        <p>{data.allPost[0]._id}</p>
      </div>

    </>
  );
}

export default Main;
