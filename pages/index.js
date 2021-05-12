import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// import {mastersDataStore} from '../lib/data/getMastersXLSX'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>


    Masters Visuals
      <Link href='/masters/2015' >2015</Link>

      <img src='/circles.svg'></img>


    </div>
  )
}
