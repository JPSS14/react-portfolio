import certificates from '../../../certificate.json';
import style from './Certificates.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Certificates() {
    const [certificateList, setCertificateList] = useState([]);
    const [category, setCategory] = useState("destaque");

    useEffect(() => {
        setCertificateList(certificates.filter(certificates => certificates.destaque === "1"));
    }, []);

    function certificateType(type: string) {
        switch (type) {
            case "destaque":
                setCertificateList(certificates.filter(certificates => certificates.destaque === "1"));
                setCategory("destaque");
                break;
            case "front-end":
                setCertificateList(certificates.filter(certificates => certificates.categoria === "front-end" && certificates.index === "1"));
                setCategory("front-end");
                break;
            case "back-end":
                setCertificateList(certificates.filter(certificates => certificates.categoria === "back-end" && certificates.index === "1"));
                setCategory("back-end");
                break;
            case "outros":
                setCertificateList(certificates.filter(certificates => certificates.categoria === "outros" && certificates.index === "1"));
                setCategory("outros");
                break;
        }
    }
    return (
        <div className={style.mainCertificates}>
            <header>
                <h1>Certificados</h1>
                <p>Aqui estão todos os certificados que conquistei através de cursos.</p>
            </header>

            <div className={style.certificatesMenu}>
                <button type="button" className={category === "destaque" ? style.active : ''} onClick={() => certificateType("destaque")}>Destaques</button>
                <button type="button" className={category === "front-end" ? style.active : ''} onClick={() => certificateType("front-end")}>Front-end</button>
                <button type="button" className={category === "back-end" ? style.active : ''} onClick={() => certificateType("back-end")}>Back-end</button>
                <button type="button" className={category === "outros" ? style.active : ''} onClick={() => certificateType("outros")}>Outros</button>
            </div>

            <section className={style.certificatesSection}>

                {
                    certificateList.map((item, key) => (
                        <article className={style.certificateActive ? (`${style.certificateArticle} ${style.certificateActive}`) : (`${style.certificateArticle} ${style.certificateDesable}`)} key={key}>
                            <div className={style.imgCertificate}>
                                <img src={item.imgUrl} alt={item.nome} />
                            </div>
                        </article>
                    ))
                }
            </section>
            <Link href="/certificados">
                <a>
                    <button className={style.readMore}>Ver todos</button>
                </a>
            </Link>
        </div>
    );
}