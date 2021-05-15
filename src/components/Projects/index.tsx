import style from './Projects.module.scss';
import Link from 'next/link';
import projects from '../../../projects.json';

export function Projects() {
    const react = projects.filter(projects => projects.destaque === "1");
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

                {react.map((item, key) => (
                    <article className={style.projectArticle} key={key}>
                        <header>
                            <h2>{item.nome}</h2>
                            <p>Status: <span className={item.status === "Construção" ? style.building : item.status === "Completo" ? style.complete : style.otmz}>{item.status}</span></p>
                            <p>Tipo: {item.tipo}</p>
                            <div className={style.articleTecnologies}>
                                <ul>
                                    {item.tecnologias.map((item, key) => (
                                        <li key={key}>{item.tecnologia}</li>
                                    ))}
                                </ul>
                            </div>
                        </header>
                        <div className={style.articleImgContainer}>
                            <img className={style.articleImgContainer} src={item.imgUrl} alt={item.nome} />
                        </div>
                        <div className={style.articleContent}>
                            <p className={style.title}>Introdução</p>
                            <div className={style.text} dangerouslySetInnerHTML={{ __html: item.description }}>
                            </div>
                            <Link href="/react-bank">
                                <a className={style.link}>Saiba mais</a>
                            </Link>
                        </div>
                    </article>
                ))}

                
            </section>
            <button className={style.readMore}>Ver todos</button>
        </div>
    );
}