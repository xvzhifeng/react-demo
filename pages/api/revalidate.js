export default async function handler(req, res) {
  try {
    // Next.js现在公开了一个unstable_revalidate()函数，允许您重新验证每个单独使用 getStaticProps 的页面
    await res.unstable_revalidate('/isr-on-demand');
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
