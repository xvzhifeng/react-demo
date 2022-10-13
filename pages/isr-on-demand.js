// incremental static generation
import { YOUR_API_URL } from '../lib/api';
import { mydbAwait } from '../lib/db';
export default function IncrementalStaticRegenerationOnDemand({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the api endpoint e.g. api/revalidate get's pinged.
export async function getStaticProps() {
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
