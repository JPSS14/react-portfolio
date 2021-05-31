import style from './Projects.module.scss';
import Link from 'next/link';
import projects from '../../../projects.json';
import { useEffect, useState } from 'react';

export function Projects() {
    const [category, setCategory] = useState("destaque");
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(projects.filter(projects => projects.destaque === "1"));
    }, []);

    function projectType(type: string) {
        if (type === "destaque") {
            setProjectList(projects.filter(projects => projects.destaque === "1"));
            setCategory("destaque");

        } else {
            setProjectList(projects.filter(projects => projects.categoria === type));
            setCategory(type);
        }

    }
    return (
        <div className={style.mainProjects}>
            <header>
                <h1>Projetos</h1>
                <p>Confira todos os projetos que desenvolvi e os que estão em construção.</p>
            </header>

            <section className={style.projectsSection}>
                <header>
                    <button type="button" className={category === "destaque" ? style.active : ''} onClick={() => projectType("destaque")}>Destaques</button>
                    <button type="button" className={category === "next" ? style.active : ''} onClick={() => projectType("next")}>Next</button>
                    <button type="button" className={category === "react" ? style.active : ''} onClick={() => projectType("react")}>React</button>
                    <button type="button" className={category === "puro" ? style.active : ''} onClick={() => projectType("puro")}>HTML + CSS + JS</button>
                </header>

                {projectList.map((item, key) => (
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
                            <Link href={`/projeto/${item.id}`}>
                                <a className={style.link}>Saiba mais</a>
                            </Link>
                        </div>
                    </article>
                ))}


            </section>
            <Link href="/projetos">
                <a className={style.readMore}>
                    <button >Ver todos</button>
                </a>
            </Link>
        </div>
    );
}