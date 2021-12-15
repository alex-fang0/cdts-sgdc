import Layout from '../../components/layout'
import { getAllCsvIds, getCsvData } from '../../lib/csvs'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Csv({ csvData }) {
  return (
    <Layout>
      <Head>
        <title>{csvData.id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{csvData.id}</h1>
        <div dangerouslySetInnerHTML={{ __html: csvData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllCsvIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const csvData = await getCsvData(params.id)
  return {
    props: {
      csvData
    }
  }
}
