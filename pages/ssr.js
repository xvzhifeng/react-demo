// server side rendering
import { YOUR_API_URL } from '../lib/api';
import { mydbAwait } from '../lib/db';
import Layout from '../components/layout';
export default function ServerSideRendered({ data }) {
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
// 服务端渲染必须使用绝对路劲
export async function getServerSideProps() {
  let cmd = "select id, name from d_user"
  let resultes = await mydbAwait.awaitQuery(cmd)
  console.log(resultes)
  let data = await resultes.map(res => {
    return {
      'id': res.id,
      'name': res.name
    }
  })
  console.log(data)
  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
