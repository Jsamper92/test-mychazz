import { GET_PAGES } from '@/queries/pages';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

function Main() {


  const { loading, data } = useQuery(GET_PAGES, {
    variables: {
      title: 'home'
    }
  });

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
        {data.allPage && data.allPage.map(
          ({ title, _id, literals, __typename }: { title: string, __typename: string, _id: string, literals: [] }) => {
            return (
              <div style={{ border: '1px solid black', padding: 5 }} key={_id}>
                <p>
                  <strong style={{ fontWeight: 'bold' }}>Module {__typename}:</strong>
                  {title}
                </p>
                <p>
                  <strong style={{ fontWeight: 'bold' }}>id:</strong>
                  {_id}
                </p>
                {literals.map(
                  ({ name, key }: { [key: string]: string }) => {
                    return (
                      <>
                        <p>
                          <strong style={{ fontWeight: 'bold' }}>key: </strong>
                          {key}
                        </p>
                        <strong style={{ fontWeight: 'bold' }}>language:</strong>
                        {Object.entries(name).map(([_key, _name], index) => {
                          return (
                            <li key={index}>
                              <strong>{_key}</strong>: {_name}
                            </li>
                          )
                        })}
                      </>
                    )
                  }

                )}
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Main;

