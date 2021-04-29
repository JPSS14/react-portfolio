import Head from 'next/head'
import { Header } from '../components/Header'
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

          <div className={style.mainProfile}>
            <div className={style.mainProfileContent}>
              <div className={style.imgContainer}>
                <img src="/jp.png" alt="João Pedro Scarabelli Silva" />
              </div>
              <div className={style.presentation}>
                <p>João Pedro Scarabelli Silva</p>
                <p>Desenvolvedor Web</p> 
                <p>PHP</p> 
                <p>JavaScript</p> 
                <p>TypeScript</p>
                <p>React</p> 
                <p>Next JS</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
