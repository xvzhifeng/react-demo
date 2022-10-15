import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return <>
    <Layout home={true}>
      <div>Home</div>
      <Link href="/ssr/">
        <h1>ssr</h1>
      </Link>
      <Link href="/ssg/">
        <h1>ssg</h1>
      </Link>
      <Link href="/csr/">
        <h1>csr</h1>
      </Link>
      <Link href="/isr/">
        <h1>isr</h1>
      </Link>
      <Link href="/isr-on-demand/">
        <h1>isr-on-demand</h1>
      </Link>
    </Layout>
  </>;
}

// this page is unused
