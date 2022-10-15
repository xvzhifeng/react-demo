// incremental static generation
import { YOUR_API_URL } from '../lib/api';
import { mydbAwait } from '../lib/db';
import Layout from '../components/layout';
export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      <Layout>
        {data.map((e) => (
          <h2 key={e.id}>{e.name}</h2>
        ))}
      </Layout>

    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
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

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 100, // In seconds
  };
}
