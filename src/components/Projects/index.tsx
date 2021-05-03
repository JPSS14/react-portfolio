import style from './Projects.module.scss';
import Link from 'next/link';

export function Projects() {
    return (
        <div className={style.mainProjects}>
            <header>
                <h1>Projetos</h1>
                <p>Confira todos os projetos que desenvolvi e os que estão em construção.</p>
            </header>

            <section className={style.projectsSection}>
                <header>
                    <button type="button">Construindo</button>
                    <button type="button">Next</button>
                    <button type="button">React</button>
                    <button type="button">HTML + CSS + JS</button>
                </header>

                <article className={style.projectArticle}>
                    <header>
                        <h2>React Bank</h2>
                        <p>Status: <span className={style.building}>Construção</span></p>
                        <p>Tipo: Pessoal</p>
                        <div className={style.articleTecnologies}>
                            <ul>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>SASS</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                    </header>
                    <div className={style.articleImgContainer}>
                        <img src="/react-bank-count.png" alt="React Bank" />
                    </div>
                    <div className={style.articleContent}>
                        <p className={style.title}>Introdução</p>
                        <div className={style.text}>
                            <p>React Bank é um simulador de banco, onde busco testar o uso do Sass e treinar o desenvolvimento de interfaces, além de enfatizar o uso de React, Next js e seus benefícios.</p>
                            <p>Durante a criação da interface percebi que era possível implementar diversas funcionalidades e regras de negócio, todas a nivel de front-end.</p>
                        </div>
                        <Link href="/react-bank">
                            <a className={style.link}>Saiba mais</a>
                        </Link>

                    </div>
                </article>
            </section>
        </div>
    );
}