import style from '../styles/main.module.scss';
import styleProject from '../styles/projetos.module.scss';
import projects from '../../projects.json';
import Link from 'next/link';

export default function Projetos() {
    const next = projects.filter(projects => projects.categoria === "next");
    const react = projects.filter(projects => projects.categoria === "react");
    const outros = projects.filter(projects => projects.categoria === "puro");
    return (
        <main className={style.main}>
            <div className={style.mainContent}>
                <section className={styleProject.mainProjects}>
                    <header>
                        <h1>Projetos</h1>
                    </header>

                    <section className={styleProject.section}>
                        <header>
                            <h2>Next</h2>
                        </header>
                        {next.map((item, key) => (
                            <article className={styleProject.projectArticle} key={key}>
                            <header>
                                <h2>{item.nome}</h2>
                                <p>Status: <span className={item.status === "Construção" ? styleProject.building : item.status === "Completo" ? styleProject.complete : styleProject.otmz}>{item.status}</span></p>
                                <p>Tipo: {item.tipo}</p>
                                <div className={styleProject.articleTecnologies}>
                                    <ul>
                                        {item.tecnologias.map((item, key) => (
                                            <li key={key}>{item.tecnologia}</li>
                                        ))}
                                    </ul>
                                </div>
                            </header>
                            <div className={styleProject.articleImgContainer}>
                                <img className={styleProject.articleImgContainer} src={item.imgUrl} alt={item.nome} />
                            </div>
                            <div className={styleProject.articleContent}>
                                <p className={styleProject.title}>Introdução</p>
                                <div className={styleProject.text} dangerouslySetInnerHTML={{ __html: item.description }}>
                                </div>
                                <Link href={`/projeto/${item.id}`}>
                                    <a className={styleProject.link}>Saiba mais</a>
                                </Link>
                            </div>
                        </article>
                        ))}
                    </section>

                    <section className={styleProject.section}>
                        <header>
                            <h2>React</h2>
                        </header>
                        {react.map((item, key) => (
                            <article className={styleProject.projectArticle} key={key}>
                            <header>
                                <h2>{item.nome}</h2>
                                <p>Status: <span className={item.status === "Construção" ? styleProject.building : item.status === "Completo" ? styleProject.complete : styleProject.otmz}>{item.status}</span></p>
                                <p>Tipo: {item.tipo}</p>
                                <div className={styleProject.articleTecnologies}>
                                    <ul>
                                        {item.tecnologias.map((item, key) => (
                                            <li key={key}>{item.tecnologia}</li>
                                        ))}
                                    </ul>
                                </div>
                            </header>
                            <div className={styleProject.articleImgContainer}>
                                <img className={styleProject.articleImgContainer} src={item.imgUrl} alt={item.nome} />
                            </div>
                            <div className={styleProject.articleContent}>
                                <p className={styleProject.title}>Introdução</p>
                                <div className={styleProject.text} dangerouslySetInnerHTML={{ __html: item.description }}>
                                </div>
                                <Link href={`/projeto/${item.id}`}>
                                    <a className={styleProject.link}>Saiba mais</a>
                                </Link>
                            </div>
                        </article>
                        ))}
                    </section>

                    <section className={styleProject.section}>
                        <header>
                            <h2>Outros</h2>
                        </header>
                        {outros.map((item, key) => (
                            <article className={styleProject.projectArticle} key={key}>
                            <header>
                                <h2>{item.nome}</h2>
                                <p>Status: <span className={item.status === "Construção" ? styleProject.building : item.status === "Completo" ? styleProject.complete : styleProject.otmz}>{item.status}</span></p>
                                <p>Tipo: {item.tipo}</p>
                                <div className={styleProject.articleTecnologies}>
                                    <ul>
                                        {item.tecnologias.map((item, key) => (
                                            <li key={key}>{item.tecnologia}</li>
                                        ))}
                                    </ul>
                                </div>
                            </header>
                            <div className={styleProject.articleImgContainer}>
                                <img className={styleProject.articleImgContainer} src={item.imgUrl} alt={item.nome} />
                            </div>
                            <div className={styleProject.articleContent}>
                                <p className={styleProject.title}>Introdução</p>
                                <div className={styleProject.text} dangerouslySetInnerHTML={{ __html: item.description }}>
                                </div>
                                <Link href={`/projeto/${item.id}`}>
                                    <a className={styleProject.link}>Saiba mais</a>
                                </Link>
                            </div>
                        </article>
                        ))}
                    </section>

                </section>
            </div>
        </main>
    );
}