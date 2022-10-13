// static site generation
import { YOUR_API_URL } from '../lib/api';
import { mydbAwait } from '../lib/db';
export default function StaticSiteGeneration({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // const res = await fetch(YOUR_API_URL);
  // const data = await res.json();
  let cmd = "select id, name from d_user"
  let resultes = await mydbAwait.awaitQuery(cmd)
  let data = await resultes.map( res => {
    return {
      'id':res.id,
      'name': res.name
    }
  })
  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
