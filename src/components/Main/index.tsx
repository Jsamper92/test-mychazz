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
      <div>
        <p>{data.allPost[0].title}</p>
        <p>{data.allPost[0].__typename}</p>
        <p>{data.allPost[0]._id}</p>
      </div>
      <Image
        src="/fondo.png" 
        alt="fondo"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </>
  );
}

export default Main;
