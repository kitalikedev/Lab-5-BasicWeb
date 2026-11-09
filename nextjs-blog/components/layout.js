import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

const name = 'Tên của bạn';
export const siteTitle = 'Next.js Blog';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Blog tĩnh xây bằng Next.js" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={styles.heading}>{name}</h1>
        ) : (
          <h2 className={styles.headingMd}>
            <Link href="/">{name}</Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
