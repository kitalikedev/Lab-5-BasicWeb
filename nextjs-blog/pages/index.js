import Link from 'next/link';
import Layout from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

// Chạy lúc build, kết quả được đưa vào props của Home
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <p>Xin chào, đây là blog tĩnh đầu tiên của mình với Next.js.</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} style={{ marginBottom: '1.25rem' }}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
