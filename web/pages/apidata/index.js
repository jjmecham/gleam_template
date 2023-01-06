import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { items: data }
    }
}
const Items = ({ items }) => {
    // console.log(items)
  return (
    <>
      <Head>
        <title>API Data</title>
        <meta name="keywords" content="items" />
      </Head>
      <div>
        <h1>All Items</h1>
        {items.map ( item => (
            <span key={item.id}>
                <h3>{item.name}</h3>
                <h4>{item.address.city}</h4>
            </span>
        ))}
      </div>
    </>
  );
};

export default Items;
// nasa api key xSGDfgUxlGTBtwHcicSz2wnp306QTWbbFc2PN0Sp