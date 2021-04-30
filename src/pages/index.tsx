import Head from 'next/head';
import { Header } from '../components/Header';
import {Profile} from '../components/Profile';
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

          <Profile/>

        </div>
      </main>
    </>
  )
}
