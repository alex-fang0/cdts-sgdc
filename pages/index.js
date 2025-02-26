import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedCsvsData } from '../lib/csvs'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData,allCsvsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
		<ul className={utilStyles.list}>
          {allCsvsData.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/csvs/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allCsvsData = getSortedCsvsData()
  console.log(allCsvsData);
  //console.log(allPostsData);
  return {
    props: {
      allPostsData,
	  allCsvsData
    }
  }
}
