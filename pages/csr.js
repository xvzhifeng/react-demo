// client side rendered
import { useEffect, useState } from 'react';
import { YOUR_API_URL } from '../lib/api';
import Layout from '../components/layout';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch("/api/data01");
    const data = await res.json();
    console.log(data)
    setState(data);
    console.log(state)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout>
        {state.map((e) => (
          <h2 key={e.id}>{e.name}</h2>
        ))}
      </Layout>

    </>
  );
}
