import Head from 'next/head';
import { Certificates } from '../components/Certificates';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Profile } from '../components/Profile';
import { Projects } from '../components/Projects';
import style from '../styles/main.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={style.main}>
        <div className={style.mainContent}>

          <Profile />
          <Projects />
          <Certificates />

        </div>
      </main>
      <Footer />
    </>
  )
}
