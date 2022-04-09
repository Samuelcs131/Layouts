import type { NextPage } from 'next'
import Link from 'next/link'
import HeadPage from '../components/HeadPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (<>
      <HeadPage titlePage='Home - Layouts'/>
      <div className={styles.container}>

      <main className={styles.main}>
      <h1 className={styles.title}>
      Welcome to <Link href="/"><a>Layouts</a></Link>
      </h1>

      <div className={styles.grid}>
      <Link href="/layoutOne"><a className={styles.card}>
        <h2>Layout One &rarr;</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas asperiores.</p>
      </a></Link>

      <Link href="/layoutTwo"><a className={styles.card}>
        <h2>Layout Two &rarr;</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas asperiores.</p>
      </a></Link>

      <Link href="/layoutThree"><a className={styles.card}>
        <h2>Layout Three &rarr;</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas asperiores.</p>
      </a></Link>

      <Link href="/layoutFour"><a className={styles.card}>
        <h2>Layout Four &rarr;</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas asperiores.</p>
      </a></Link>
      </div>
      </main>

      </div>
  </>)
}

export default Home
